from rest_framework import serializers
from .models import FeedbackForm, Question, Option

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ['id', 'text']

class QuestionSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['id', 'text', 'question_type', 'is_required', 'options']

class FeedbackFormSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = FeedbackForm
        fields = ['id', 'title', 'description', 'created_by', 'is_active', 'created_at', 'questions']
