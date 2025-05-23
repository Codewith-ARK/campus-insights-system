from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, RegisterView

router = DefaultRouter()
router.register(r'', UserViewSet)  # GET /api/users/

urlpatterns = [
    path('register/', RegisterView.as_view(), name='user-register'),  # POST /api/users/register/
    path('', include(router.urls)),
]
