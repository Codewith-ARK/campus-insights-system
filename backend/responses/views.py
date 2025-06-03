from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response as DRFResponse
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Response as FormResponse
from .serializers import ResponseSerializer, FormResponseDetailSerializer, FormWithResponsesSerializer
from feedback.models import FeedbackForm

class FeedbackResponseViewSet(viewsets.ModelViewSet):
    queryset = FormResponse.objects.all()
    serializer_class = FormResponseDetailSerializer

class SubmitFormResponseView(APIView):
    """
    Handles submission of responses to feedback forms.
    Requires user authentication.
    """
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            form_id = request.data.get('form_id')
            answers_data = request.data.get('answers_data', [])
            
            if not form_id or not answers_data:
                return DRFResponse(
                    {'error': 'form_id and answers_data are required'}, 
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Get the form instance
            try:
                form = FeedbackForm.objects.get(id=form_id)
            except FeedbackForm.DoesNotExist:
                return DRFResponse(
                    {'error': 'Form not found'}, 
                    status=status.HTTP_404_NOT_FOUND
                )

            # Create response using ResponseSerializer
            response_data = {
                'form': int(form_id),
                'user': request.user.id  # Use the authenticated user's ID
            }
            
            # Transform answers data to match serializer format
            transformed_answers = [
                {
                    'question': int(answer['question_id']),
                    'answer_text': answer['answer']
                }
                for answer in answers_data
            ]
            serializer = ResponseSerializer(data=response_data, context={'answers': transformed_answers})
            if serializer.is_valid():
                response = serializer.save()
                # Return the simplified response data
                detail_serializer = FormResponseDetailSerializer(response)
                return DRFResponse(
                    {
                        'message': 'Form response submitted successfully',
                        'response': detail_serializer.data
                    }, 
                    status=status.HTTP_201_CREATED
                )
            print(serializer.errors)
            return DRFResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        except Exception as e:
            print(e)
            return DRFResponse(
                {'error': str(e)}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class ViewUserResponseView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_id = request.data.get('user_id')

class ViewFormResponsesView(RetrieveAPIView):
    queryset = FormResponse.objects.all()
    serializer_class = FormResponseDetailSerializer
    permission_classes = [IsAuthenticated]
    
    def get(self, request, form_id):
        try:
            # Get all responses for the specified form ID
            responses = FormResponse.objects.filter(form_id=form_id).select_related(
                'user', 'form'
            ).prefetch_related(
                'answers__question',
                'answers__selected_option',
                'answers__question__options'
            )
            serializer = FormResponseDetailSerializer(responses, many=True)
            return DRFResponse(serializer.data, status=status.HTTP_200_OK)
            
        except Exception as e:
            return DRFResponse(
                {'error': str(e)}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class ViewAllResponses(RetrieveAPIView):
    queryset = FormResponse.objects.all()
    serializer_class = FormResponseDetailSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = FormResponseDetailSerializer(self.queryset.all(), many=True)
        return DRFResponse(serializer.data, status=status.HTTP_200_OK)

class FormResponsesView(viewsets.ReadOnlyModelViewSet):
    """
    Get a form with all its responses in an optimized format
    Supports both list and detail views.
    """
    permission_classes = [IsAuthenticated]
    serializer_class = FormWithResponsesSerializer
    queryset = FeedbackForm.objects.all()
    
    def get_queryset(self):
        return FeedbackForm.objects.prefetch_related(
            'questions',
            'questions__options',
            'responses',
            'responses__user',
            'responses__answers',
            'responses__answers__question',
            'responses__answers__selected_option'
        )