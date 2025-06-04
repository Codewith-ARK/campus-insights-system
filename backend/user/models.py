from django.contrib.auth.models import AbstractUser
from django.db import models

from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token




class User(AbstractUser):
    ROLE_CHOICES = [
        ('student', 'Student'),
        ('admin', 'Admin'),
        ('superadmin', 'SuperAdmin'),
    ]
    DEPARTMENT_CHOICES = [
        ('cs', 'CS'),
        ('it', 'IT'),
        ('bba', 'BBA'),
        ('bed', 'BED'),
        ('english', 'English'),
    ]
    BATCH_CHOICES = [
        ('2k19', '2k19'),
        ('2k20', '2k20'),
        ('2k21', '2k21'),
        ('2k22', '2k22'),
        ('2k23', '2k23'),
        ('2k24', '2k24'),
        ('2k25', '2k25'),
    ]

    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    department = models.CharField(max_length=20, choices=DEPARTMENT_CHOICES, blank=True)
    batch = models.CharField(max_length=10, choices=BATCH_CHOICES, blank=True)
    enrollment_number = models.CharField(max_length=50, blank=True, null=True)  # For students
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.username
    
    
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
