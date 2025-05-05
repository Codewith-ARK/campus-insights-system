from rest_framework import serializers
from .models import Response, Answer
from feedback.serializers import QuestionSerializer, OptionSerializer
from feedback.models import Question, Option

class AnswerSerializer(serializers.ModelSerializer):
    question = serializers.PrimaryKeyRelatedField(queryset=Question.objects.all())
    selected_option = serializers.PrimaryKeyRelatedField(queryset=Option.objects.all(), allow_null=True, required=False)

    class Meta:
        model = Answer
        fields = ['id', 'question', 'answer_text', 'selected_option', 'rating']

class ResponseSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)

    class Meta:
        model = Response
        fields = ['id', 'form', 'user', 'submitted_at', 'answers']

    def create(self, validated_data):
        answers_data = validated_data.pop('answers')
        response = Response.objects.create(**validated_data)
        for answer_data in answers_data:
            Answer.objects.create(response=response, **answer_data)
        return response
