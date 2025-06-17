from django.contrib import admin
from .models import FeedbackForm, Question, Option, OptionSet, AudienceTarget

@admin.register(FeedbackForm)
class FeedbackFormAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_by', 'created_at', 'is_active')

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('text', 'type', 'feedback_form', 'order')

@admin.register(Option)
class OptionAdmin(admin.ModelAdmin):
    list_display = ('text', 'score', 'option_set')

@admin.register(OptionSet)
class OptionSetAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(AudienceTarget)
class AudienceTargetAdmin(admin.ModelAdmin):
    list_display = ('custom_label', 'role', 'department', 'batch', 'semester', 'designation')
    list_filter = ('role', 'department', 'batch', 'semester')
    search_fields = ('custom_label',)
