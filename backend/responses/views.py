from rest_framework import viewsets
from .models import Response
from .serializers import ResponseSerializer

class FeedbackResponseViewSet(viewsets.ModelViewSet):
    queryset = Response.objects.all()
    serializer_class = ResponseSerializer
