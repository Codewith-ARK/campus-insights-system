from rest_framework import serializers
from .models import FeedbackForm, Question, Option
from user.models import User

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ['id', 'text']

class QuestionSerializer(serializers.ModelSerializer):
     # Used when creating questions
    options = serializers.ListField(
        child=serializers.CharField(), write_only=True, required=False
    )

    # Used when reading questions
    options_data = OptionSerializer(source='options', many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['id', 'question', 'type', 'options', 'options_data']

    def create(self, validated_data):
        options_data = validated_data.pop('options', [])
        question = Question.objects.create(**validated_data)
        for option_text in options_data:
            Option.objects.create(question=question, text=option_text)
        return question

class FeedbackFormSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)
    author = serializers.SerializerMethodField()

    class Meta:
        model = FeedbackForm
        fields = ['id', 'title', 'department', 'batch', 'description', 'created_by', 'is_active', 'created_at', 'questions', 'author']

    def create(self, validated_data):
        questions_data = validated_data.pop('questions', [])
        feedback_form = FeedbackForm.objects.create(**validated_data)
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