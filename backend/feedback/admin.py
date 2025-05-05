# Register your models here.
from django.contrib import admin
from .models import FeedbackForm, Question, Option

admin.site.register(FeedbackForm)
admin.site.register(Question)
admin.site.register(Option)
