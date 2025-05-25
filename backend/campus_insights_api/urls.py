from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from user.views import MyTokenObtainPairView, LoginView, UserProfileView, SimpleLoginView, csrf_token_view
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # JWT Authentication
    path('api/token/', LoginView.as_view(), name='token_obtain_pair'),   # login
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # refresh

    # User Auth
    path('api/auth/', SimpleLoginView.as_view(), name='token_obtain_pair'),   # login

    # Other app routes
    path("api/csrf/", csrf_token_view),
    path('api/me/', UserProfileView.as_view(), name='user_profile'),
    path('api/users/', include('user.urls')),
    path('api/preference/', include('preferences.urls')),

    # path('api/feedback/', include('feedback.urls')),
    path('api/form/', include('feedback.urls')),
    path('api/response/', include('responses.urls')),
    path('api/insights/', include('insights.urls')),
]