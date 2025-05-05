from django.db import models
from feedback.models import FeedbackForm

class Insight(models.Model):
    form = models.ForeignKey(FeedbackForm, on_delete=models.CASCADE)
    generated_at = models.DateTimeField(auto_now_add=True)
    summary = models.TextField()
    sentiment_score = models.FloatField()
    keywords = models.JSONField()
    metadata = models.JSONField()  # For additional insights (e.g., cluster ID, trends)

    def __str__(self):
        return f"Insights for '{self.form.title}'"
