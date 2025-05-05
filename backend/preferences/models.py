from django.db import models
from user.models import User

class UserPreference(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    prefers_email_notifications = models.BooleanField(default=True)
    dark_mode = models.BooleanField(default=False)
    preferred_language = models.CharField(max_length=50, default='en')

    def __str__(self):
        return f"Preferences for {self.user.username}"
