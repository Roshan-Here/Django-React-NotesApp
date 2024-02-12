from django.db import models

# Create your models here.

class Note(models.Model):
    body = models.TextField(null=True,blank=True)
    updated = models.DateTimeField(auto_now=True) # timestamp of when updated
    created = models.DateTimeField(auto_now_add=True) # timestamp of when created