from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework.generics import RetrieveAPIView, ListAPIView
from .models import FeedbackForm
from .serializers import FeedbackFormSerializer
from responses.serializers import ResponseSerializer
from rest_framework.authentication import TokenAuthentication
import json

class FeedbackFormViewSet(viewsets.ModelViewSet):
    queryset = FeedbackForm.objects.all()
    serializer_class = FeedbackFormSerializer

class SubmitFeedbackView(APIView):
    """
    Handles submission of feedback form data.
    """
    def post(self, request):
        serializer = FeedbackFormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Feedback submitted successfully.'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CreateFeedbackFormView(APIView):
    """
    Allows admins to create new feedback evaluation forms.
    """
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            serializer = FeedbackFormSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(created_by=request.user)
                return Response({'message': 'Feedback form created successfully.'}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class FeedbackFormDetailView(RetrieveAPIView):
    """
    Fetch a single feedback form by ID, including creator user data as 'author'
    and 'options' for each question.
    """
    queryset = FeedbackForm.objects.all()
    serializer_class = FeedbackFormSerializer
    permission_classes = [AllowAny]
    lookup_field = 'id'

class FeedbackFormListView(ListAPIView):
    """
    Fetch all feedback forms, including creator user data.
    """
    queryset = FeedbackForm.objects.all()
    serializer_class = FeedbackFormSerializer
    permission_classes = [AllowAny]

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        data = serializer.data

        # Attach user info for each feedback form
        for i, form in enumerate(queryset):
            user = form.created_by
            if user:
                data[i]['author'] = {
                    'author_id': user.id,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'email': user.email,
                }
            else:
                data[i]['author'] = None

        return Response(data)

class FeedbackFormQueryView(ListAPIView):
    """
    Fetch feedback forms filtered by query parameters (e.g., batch, department).
    Example: /api/form/query/?batch=2k21&department=cs
    """
    serializer_class = FeedbackFormSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = FeedbackForm.objects.all()
        batch = self.request.query_params.get('batch')
        department = self.request.query_params.get('department')
        if batch:
            queryset = queryset.filter(batch=batch)
        if department:
            queryset = queryset.filter(department=department)
        return queryset