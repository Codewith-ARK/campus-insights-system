from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, UserSignupView, UserLoginApiView 
# UserProfileView

router = DefaultRouter()
router.register(r'', UserViewSet)  # GET /api/users/

urlpatterns = [
    path('register/', UserSignupView.as_view(), name='user-register'),  # POST /api/users/register/
    path('login/', UserLoginApiView.as_view(), name='user-login'),
    # path('me/', UserProfileView.as_view(), name='user-profile'),

    path('', include(router.urls)),
]
