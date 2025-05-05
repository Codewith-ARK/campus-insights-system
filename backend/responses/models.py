from django.db import models
from user.models import User
from feedback.models import FeedbackForm, Question, Option

class Response(models.Model):
    form = models.ForeignKey(FeedbackForm, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Response by {self.user.username} on {self.submitted_at.date()}"

class Answer(models.Model):
    response = models.ForeignKey(Response, on_delete=models.CASCADE, related_name='answers')
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer_text = models.TextField(blank=True, null=True)
    selected_option = models.ForeignKey(Option, on_delete=models.SET_NULL, blank=True, null=True)
    rating = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return f"Answer to '{self.question.text}'"
