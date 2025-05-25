from django.db import models
from user.models import User

class FeedbackForm(models.Model):
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
    title = models.CharField(max_length=255)
    department = models.CharField(max_length=20, choices=DEPARTMENT_CHOICES, blank=True)
    batch = models.CharField(max_length=10, choices=BATCH_CHOICES, blank=True)
    description = models.TextField(blank=True)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='created_forms')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Question(models.Model):
    QUESTION_TYPE_CHOICES = [
        ('radio', 'Radio'),
        ('checkbox', 'Checkbox'),
    ]
    # is_required = models.BooleanField(default=True)
    feedback_form = models.ForeignKey(FeedbackForm, related_name='questions', on_delete=models.CASCADE)
    question = models.CharField(max_length=500, null=True)
    type = models.CharField(max_length=20, choices=QUESTION_TYPE_CHOICES, blank=True)

    def __str__(self):
        return self.question

class Option(models.Model):
    question = models.ForeignKey(Question, related_name='options', on_delete=models.CASCADE)
    text = models.CharField(max_length=255)

    def __str__(self):
        return self.text
