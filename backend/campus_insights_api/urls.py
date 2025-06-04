from django.contrib import admin
from django.urls import path, include
from user.views import UserProfileView

# from rest_framework_simplejwt.views import (
#   TokenObtainPairView,
#   TokenRefreshView 
# )


urlpatterns = [
    path('admin/', admin.site.urls),
    


    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),



    # User Auth
    # path('api/auth/', SimpleLoginView.as_view(), name='token_obtain_pair'),   # login

    # Other app routes
    # path("api/csrf/", csrf_token_view),
    # path('api/me/', UserProfileView.as_view(), name='user_profile'),


    
    path('api/users/', include('user.urls')),
    path('api/preference/', include('preferences.urls')),

    # path('api/feedback/', include('feedback.urls')),
    path('api/form/', include('feedback.urls')),
    path('api/response/', include('responses.urls')),
    path('api/insights/', include('insights.urls')),
]