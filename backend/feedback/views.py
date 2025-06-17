from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework.generics import RetrieveAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.authentication import TokenAuthentication
import json
from django.db import transaction

from .models import FeedbackForm, Question, OptionSet, Option, AudienceTarget
from .serializers import FeedbackFormSerializer
from responses.serializers import ResponseSerializer
from .serializers import OptionSetSerializer

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

# class CreateFeedbackFormView(APIView):
#     """
#     Allows admins to create new feedback evaluation forms.
#     """
#     authentication_classes = [TokenAuthentication]
#     permission_classes = [IsAuthenticated]

#     def post(self, request):
#         try:
#             serializer = FeedbackFormSerializer(data=request.data)
#             if serializer.is_valid():
#                 serializer.save(created_by=request.user)
#                 return Response({'message': 'Feedback form created successfully.'}, status=status.HTTP_201_CREATED)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         except Exception as e:
#             return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CreateFeedbackFormView(APIView):
    """
    Allows admins to create new feedback evaluation forms.
    """
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            with transaction.atomic():
                data = request.data
                audience_data_list = data.get('audiences', [])  # 👈 expects a list now

                serializer = FeedbackFormSerializer(data=data)
                serializer.is_valid(raise_exception=True)

                feedback_form = FeedbackForm.objects.create(
                    title=serializer.validated_data['title'],
                    description=serializer.validated_data.get('description', ''),
                    created_by=request.user
                )

                # Handle multiple audiences
                for audience_data in audience_data_list:
                    audience_obj, _ = AudienceTarget.objects.get_or_create(**audience_data)
                    feedback_form.audiences.add(audience_obj)

                # Handle questions
                questions_data = data.get('questions', [])
                for question_data in questions_data:
                    option_set_id = question_data.get('option_set')
                    options = question_data.get('options', [])

                    question = Question.objects.create(
                        feedback_form=feedback_form,
                        text=question_data['text'],
                        type=question_data['type'],
                        option_set_id=option_set_id if option_set_id else None,
                    )

                    if not option_set_id and options:
                        manual_option_set = OptionSet.objects.create(
                            name=f"Manual Options - Q{question.id}"
                        )
                        question.option_set = manual_option_set
                        question.save()

                        for option_text in options:
                            Option.objects.create(option_set=manual_option_set, text=option_text)

                return Response({'message': 'Feedback form created successfully.'}, status=status.HTTP_201_CREATED)

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
    queryset = FeedbackForm.objects.select_related("created_by").all()
    serializer_class = FeedbackFormSerializer
    permission_classes = [AllowAny]

    # def list(self, request, *args, **kwargs):
    #     queryset = self.get_queryset()
    #     serializer = self.get_serializer(queryset, many=True)
    #     data = serializer.data

    #     # Attach user info for each feedback form
    #     for i, form in enumerate(queryset):
    #         user = form.created_by
    #         if user:
    #             data[i]['author'] = {
    #                 'author_id': user.id,
    #                 'first_name': user.first_name,
    #                 'last_name': user.last_name,
    #                 'email': user.email,
    #             }
    #         else:
    #             data[i]['author'] = None

    #     return Response(data)

class FeedbackFormQueryView(ListAPIView):
    """
    Fetch feedback forms filtered by query parameters (e.g., batch, department).
    Example: /api/form/query/?batch=2k21&department=cs
    """
    serializer_class = FeedbackFormSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = FeedbackForm.objects.all()
        role = self.request.query_params.get('role')
        batch = self.request.query_params.get('batch')
        department = self.request.query_params.get('department')
        custom_label = self.request.query_params.get('custom_label')
        
        if custom_label:
            queryset = queryset.filter(audiences__custom_label=custom_label)
        if role:
            queryset = queryset.filter(audiences__role=role)
        if batch:
            queryset = queryset.filter(audiences__batch=batch)
        if department:
            queryset = queryset.filter(audiences__department=department)

        return queryset
    
class OptionSetDetailView(RetrieveUpdateDestroyAPIView):
    queryset = OptionSet.objects.prefetch_related('options').all()
    serializer_class = OptionSetSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'

class OptionSetListCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """List all reusable OptionSets"""
        option_sets = OptionSet.objects.prefetch_related('options').all()
        serializer = OptionSetSerializer(option_sets, many=True)
        return Response(serializer.data)

    def post(self, request):
        """Create a new reusable OptionSet with options"""
        serializer = OptionSetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Option set created successfully.'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)