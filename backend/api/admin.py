from django.contrib import admin

# Register your models here.

from .models import StudyDetail,SchoolDetail

admin.site.register(StudyDetail)
admin.site.register(SchoolDetail)
