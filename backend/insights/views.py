from rest_framework import viewsets
from .models import Insight
from .serializers import InsightSerializer

class InsightViewSet(viewsets.ModelViewSet):
    queryset = Insight.objects.all()
    serializer_class = InsightSerializer
