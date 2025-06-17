from rest_framework import serializers
from .models import FeedbackForm, Question, Option, OptionSet, AudienceTarget
from user.models import User

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ['id', 'text', 'score']  # include score if needed elsewhere
        
class OptionSetSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True)

    class Meta:
        model = OptionSet
        fields = ['id', 'name', 'options']

    def create(self, validated_data):
        options_data = validated_data.pop('options')
        option_set = OptionSet.objects.create(**validated_data)
        for option in options_data:
            Option.objects.create(option_set=option_set, **option)
        return option_set
    
    def update(self, instance, validated_data):
        options_data = validated_data.pop('options', None)
        instance.name = validated_data.get('name', instance.name)
        instance.save()

        if options_data is not None:
            # Clear existing options and recreate
            instance.options.all().delete()
            for option in options_data:
                Option.objects.create(option_set=instance, **option)

        return instance

class QuestionSerializer(serializers.ModelSerializer):
    options = serializers.ListField(
        child=serializers.CharField(), write_only=True, required=False
    )
    options_data = OptionSerializer(source='options', many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['id', 'text', 'type', 'option_set', 'options', 'options_data']

    def create(self, validated_data):
        options_data = validated_data.pop('options', [])
        question = Question.objects.create(**validated_data)

        # If no option_set is used, add options directly
        if not question.option_set and options_data:
            option_set = OptionSet.objects.create(name=f"ManualSet for Q{question.id}")
            question.option_set = option_set
            question.save()
            for option_text in options_data:
                Option.objects.create(option_set=option_set, text=option_text)

        return question

class AudienceTargetSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudienceTarget
        fields = ['role', 'department', 'batch', 'semester', 'designation', 'custom_label']

class FeedbackFormSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)
    author = serializers.SerializerMethodField()
    audiences = AudienceTargetSerializer(many=True)

    class Meta:
        model = FeedbackForm
        fields = ['id', 'title', 'description', 'questions','created_by', 'is_active', 'created_at', 'author', 'audiences']

    def create(self, validated_data):
        questions_data = validated_data.pop('questions', [])
        audience_data = validated_data.pop('audiences', [])
        feedback_form = FeedbackForm.objects.create(**validated_data)
        
        for audience in audience_data:
            audience_obj = AudienceTarget.objects.create(**audience)
            feedback_form.audiences.add(audience_obj)

        for question_data in questions_data:
            options_data = question_data.pop('options', [])
            question = Question.objects.create(feedback_form=feedback_form, **question_data)
            for option_text in options_data:
                Option.objects.create(question=question, text=option_text)

        return feedback_form

    def get_author(self, obj):
        user = obj.created_by
        if user:
            return {
                'author_id': user.id,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'email': user.email,
            }
        return None
# GPT Code
class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email']