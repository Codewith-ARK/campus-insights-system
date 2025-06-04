from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
        
    path('api/users/', include('user.urls')),
    path('api/preference/', include('preferences.urls')),

    # path('api/feedback/', include('feedback.urls')),
    path('api/form/', include('feedback.urls')),
    path('api/response/', include('responses.urls')),
    path('api/insights/', include('insights.urls')),
]