from django.db import models
from django.core.exceptions import ValidationError
from user.models import User
from feedback.models import FeedbackForm, Question, Option

class Response(models.Model):
    form = models.ForeignKey(FeedbackForm, on_delete=models.CASCADE, related_name='responses')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='form_responses')
    submitted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-submitted_at']
        unique_together = ['user', 'form']  # One response per user per form

    def __str__(self):
        return f"Response by {self.user.username} to '{self.form.title}'"

    def save(self, *args, **kwargs):
        if not self.pk:  # Only check on creation
            existing = Response.objects.filter(user=self.user, form=self.form).exists()
            if existing:
                raise ValidationError('You have already submitted a response to this form.')
        super().save(*args, **kwargs)

class Answer(models.Model):
    response = models.ForeignKey(Response, on_delete=models.CASCADE, related_name='answers')
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answers')
    selected_option = models.ForeignKey(Option, on_delete=models.SET_NULL, 
                                      blank=True, null=True, 
                                      related_name='selected_answers')
    answer_text = models.TextField(blank=True, null=True)

    class Meta:
        ordering = ['question_id']  # Keep answers ordered by question

    def __str__(self):
        return f"Answer to '{self.question}' by {self.response.user.username}"
