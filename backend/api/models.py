from django.db import models
from django.utils.text import slugify
# from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class SchoolDetail(models.Model):
    school_name = models.CharField(max_length=100,blank=True,null=True)
    # phn_no = PhoneNumberField(blank=True,null=True)

class StudyDetail(models.Model):
    student_name = models.CharField(max_length=100,unique=True)
    slug = models.SlugField(max_length=100,blank=True,null=True)    
    collage = models.ForeignKey(
        'api.schooldetail',
        on_delete=models.CASCADE,
        verbose_name=("collage details"),
        related_name="students",
        )
    
    def save(self, *args,**kwargs):
        if not self.slug:
            self.slug = slugify(self.student_name.replace(" ","_"))
        super(StudyDetail, self).save(*args,**kwargs)