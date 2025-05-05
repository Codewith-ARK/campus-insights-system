from rest_framework import viewsets
from .models import FeedbackForm
from .serializers import FeedbackFormSerializer

class FeedbackFormViewSet(viewsets.ModelViewSet):
    queryset = FeedbackForm.objects.all()
    serializer_class = FeedbackFormSerializer
