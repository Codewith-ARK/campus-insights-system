from django.contrib.auth.models import AbstractUser
from django.db import models

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
