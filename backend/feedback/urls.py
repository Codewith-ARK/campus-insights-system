from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FeedbackFormViewSet
from .views import SubmitFeedbackView
from .views import CreateFeedbackFormView
from .views import FeedbackFormQueryView
from .views import FeedbackFormDetailView, FeedbackFormListView
from .views import OptionSetListCreateView, OptionSetDetailView

router = DefaultRouter()
router.register(r'forms', FeedbackFormViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('new/', CreateFeedbackFormView.as_view(), name='create-feedback-form'),
    path('get/all/', FeedbackFormListView.as_view(), name='feedback-form-list'),
    path('query/', FeedbackFormQueryView.as_view(), name='feedback-form-query'),
    path('get/<int:id>/', FeedbackFormDetailView.as_view(), name='feedback-form-detail'),
    path('option-set/', OptionSetListCreateView.as_view(), name='option-set-list-create'),
    path('option-sets/<int:id>/', OptionSetDetailView.as_view(), name='option-set-detail'),
    # path('submit/', SubmitFormResponseView.as_view(), name='feedback-form-detail'),
]