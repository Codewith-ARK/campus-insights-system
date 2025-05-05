from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FeedbackFormViewSet

router = DefaultRouter()
router.register(r'forms', FeedbackFormViewSet)

urlpatterns = [
    path('', include(router.urls)),
]