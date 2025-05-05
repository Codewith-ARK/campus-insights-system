from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = [
        ('student', 'Student'),
        ('admin', 'Admin'),
        ('superadmin', 'SuperAdmin'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    department = models.CharField(max_length=100)
    enrollment_number = models.CharField(max_length=50, blank=True, null=True)  # For students
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.username
