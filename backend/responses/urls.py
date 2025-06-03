from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    FeedbackResponseViewSet,
    SubmitFormResponseView,
    ViewFormResponsesView,
    ViewAllResponses,
    FormResponsesView
)

router = DefaultRouter()
router.register(r'', FeedbackResponseViewSet)  # /api/responses/

urlpatterns = [
    path('submit/', SubmitFormResponseView.as_view(), name='submit-response'),
    path('get/<int:form_id>/', ViewFormResponsesView.as_view(), name='view-responses'),
    # path('get/all/', ViewAllResponses.as_view(), name='view-all-responses'),
    path('get/all/', FormResponsesView.as_view({'get': 'list'}), name='view-all-form-responses'),
    path('get/<int:pk>/', FormResponsesView.as_view({'get': 'list'}), name='form-responses'),
    path('', include(router.urls)),
]
