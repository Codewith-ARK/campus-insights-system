from django.contrib.auth.models import AbstractUser
from django.db import models

from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.forms import ValidationError
from rest_framework.authtoken.models import Token
from .manager import CustomUserManager
from django.utils.translation import gettext_lazy as _


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

    username = None
    email = models.EmailField(
        _("email address"),
        unique=True,
        blank=False,  # Ensure email is required
        null=False,   # Don't allow NULL values
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    department = models.CharField(max_length=20, choices=DEPARTMENT_CHOICES, blank=True)
    batch = models.CharField(max_length=10, choices=BATCH_CHOICES, blank=True)
    enrollment_number = models.CharField(max_length=50, blank=True, null=True)  # For students

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email
    
    def clean(self):
        super().clean()
        if not self.email:
            raise ValidationError({'email': _('Email address is required.')})
    
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
