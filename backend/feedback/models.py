from django.db import models
from user.models import User

# Audience Targeting Model
class AudienceTarget(models.Model):
    ROLE_CHOICES = [
        ('student', 'Student'),
        ('faculty', 'Faculty'),
        ('admin', 'Administration'),
        ('staff', 'Non-Teaching Staff'),
    ]

    role = models.CharField(max_length=30, choices=ROLE_CHOICES)
    department = models.CharField(max_length=50, blank=True, null=True)
    batch = models.CharField(max_length=10, blank=True, null=True)
    semester = models.IntegerField(blank=True, null=True)
    designation = models.CharField(max_length=100, blank=True, null=True)
    custom_label = models.CharField(max_length=100)

    def __str__(self):
        return self.custom_label

# Option Set Model for reusable options
class OptionSet(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
# Option Model (linked to OptionSet)
class Option(models.Model):
    option_set = models.ForeignKey(OptionSet, null=True, blank=True, related_name='options', on_delete=models.CASCADE)
    text = models.CharField(max_length=255, default='Default value')
    score = models.IntegerField(default=0)

    def __str__(self):
        return self.text
    
class FeedbackForm(models.Model):
    # DEPARTMENT_CHOICES = [
    #     ('cs', 'CS'),
    #     ('it', 'IT'),
    #     ('bba', 'BBA'),
    #     ('bed', 'BED'),
    #     ('english', 'English'),
    # ]
    # BATCH_CHOICES = [
    #     ('2k19', '2k19'),
    #     ('2k20', '2k20'),
    #     ('2k21', '2k21'),
    #     ('2k22', '2k22'),
    #     ('2k23', '2k23'),
    #     ('2k24', '2k24'),
    #     ('2k25', '2k25'),
    # ]
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    # department = models.CharField(max_length=20, choices=DEPARTMENT_CHOICES, blank=True)
    # batch = models.CharField(max_length=10, choices=BATCH_CHOICES, blank=True)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='created_forms')
    created_at = models.DateTimeField(auto_now_add=True)
    audiences = models.ManyToManyField(AudienceTarget, related_name='forms')

    def __str__(self):
        return self.title

# Question Model
class Question(models.Model):
    QUESTION_TYPE_CHOICES = [
        ('radio', 'Radio'),
        ('checkbox', 'Checkbox'),
        ('text', 'Text'),
        ('rating', 'Rating'),
    ]

    feedback_form = models.ForeignKey(FeedbackForm, related_name='questions', on_delete=models.CASCADE)
    text = models.CharField(max_length=500, default="Default question text")
    type = models.CharField(max_length=20, choices=QUESTION_TYPE_CHOICES)
    option_set = models.ForeignKey(OptionSet, on_delete=models.SET_NULL, null=True, blank=True, related_name='questions')
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.text