from rest_framework import serializers
from .models import Response, Answer
from feedback.models import Question, Option, FeedbackForm
from user.models import User
from user.serializers import UserSerializer
from feedback.serializers import FeedbackFormSerializer, QuestionSerializer, OptionSerializer

class AnswerSerializer(serializers.ModelSerializer):
    question_data = QuestionSerializer(source='question', read_only=True)
    selected_option_data = OptionSerializer(source='selected_option', read_only=True)
    
    class Meta:
        model = Answer
        fields = ['id', 'question', 'selected_option', 'answer_text', 
                 'question_data', 'selected_option_data']

class ResponseSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, read_only=True)
    user_data = UserSerializer(source='user', read_only=True)
    form_data = FeedbackFormSerializer(source='form', read_only=True)
    
    class Meta:
        model = Response
        fields = ['id', 'form', 'user', 'submitted_at', 'answers', 
                 'user_data', 'form_data']
    
    def create(self, validated_data):
        answers_data = self.context.get('answers', [])
        response = Response.objects.create(**validated_data)
        
        for answer_data in answers_data:
            Answer.objects.create(
                response=response,
                question_id=answer_data['question'],
                answer_text=answer_data['answer_text']
            )
        
        return response

class SimpleUserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'name', 'department', 'batch', 'enrollment_number']
    
    def get_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"

class SimpleAnswerSerializer(serializers.ModelSerializer):
    question_text = serializers.CharField(source='question.question')
    question_type = serializers.CharField(source='question.type')
    selected_option_text = serializers.CharField(source='selected_option.text', allow_null=True)
    options = serializers.SerializerMethodField()

    class Meta:
        model = Answer
        fields = ['question_id', 'question_text', 'question_type', 'answer_text', 'selected_option_text', 'options']
    
    def get_options(self, obj):
        option_set = obj.question.option_set
        if option_set and obj.question.type in ['radio', 'checkbox']:
            return [{'id': opt.id, 'text': opt.text} for opt in option_set.options.all()]
        return None        
    
class FormResponseDetailSerializer(serializers.ModelSerializer):
    user = SimpleUserSerializer(read_only=True)
    answers = SimpleAnswerSerializer(many=True, read_only=True)
    form_title = serializers.CharField(source='form.title')
    submitted_date = serializers.DateTimeField(source='submitted_at', format="%Y-%m-%d %H:%M:%S")

    class Meta:
        model = Response
        fields = ['id', 'form_title', 'user', 'submitted_date', 'answers']

class ResponseForFormSerializer(serializers.ModelSerializer):
    """Simplified response serializer for use in FormWithResponsesSerializer"""
    user = serializers.SerializerMethodField()
    answers = serializers.SerializerMethodField()
    
    class Meta:
        model = Response
        fields = ['id', 'user', 'submitted_at', 'answers']
    
    def get_user(self, obj):
        return {
            'id': obj.user.id,
            'name': f"{obj.user.first_name} {obj.user.last_name}",
            'enrollment_number': obj.user.enrollment_number
        }
    
    def get_answers(self, obj):
        return {
            str(answer.question.id): {
                'answer_text': answer.answer_text,
                'selected_option': answer.selected_option.text if answer.selected_option else None
            }
            for answer in obj.answers.all()
        }

class FormWithResponsesSerializer(serializers.ModelSerializer):
    """Serializer that returns a form with all its responses"""
    questions = serializers.SerializerMethodField()
    responses = ResponseForFormSerializer(many=True, read_only=True)
    response_count = serializers.SerializerMethodField()
    
    class Meta:
        model = FeedbackForm
        fields = ['id', 'title', 'description', 'questions', 'responses', 'response_count']
    
    def get_questions(self, obj):
        questions = obj.questions.prefetch_related('options').all()
        return [
            {
                'id': q.id,
                'question': q.question,
                'type': q.type,
                'options': [{'id': opt.id, 'text': opt.text} for opt in q.options.all()]
            }
            for q in questions
        ]
    
    def get_response_count(self, obj):
        return obj.responses.count()
