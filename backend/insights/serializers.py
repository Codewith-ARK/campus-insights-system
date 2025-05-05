from rest_framework import serializers
from .models import Insight

class InsightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insight
        fields = ['id', 'form', 'generated_at', 'summary', 'sentiment_score', 'keywords', 'metadata']
