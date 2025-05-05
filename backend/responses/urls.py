from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FeedbackResponseViewSet

router = DefaultRouter()
router.register(r'', FeedbackResponseViewSet)  # /api/responses/

urlpatterns = [
    path('', include(router.urls)),
]
