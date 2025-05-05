from django.contrib import admin

# Register your models here.
from responses.models import Response, Answer

admin.site.register(Response)
admin.site.register(Answer)
