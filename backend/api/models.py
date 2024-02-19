from django.db import models
from django.utils.text import slugify
# from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

# class SchoolDetail(models.Model):
#     school_name = models.CharField(max_length=100,blank=True,null=True)
#     # phn_no = PhoneNumberField(blank=True,null=True)

# class StudyDetail(models.Model):
#     student_name = models.CharField(max_length=100,unique=True)
#     slug = models.SlugField(max_length=100,blank=True,null=True)    
#     collage = models.ForeignKey(
#         'api.schooldetail',
#         on_delete=models.CASCADE,
#         verbose_name=("collage details"),
#         related_name="students",
#         )
    
#     def save(self, *args,**kwargs):
#         if not self.slug:
#             self.slug = slugify(self.student_name.replace(" ","_"))
#         super(StudyDetail, self).save(*args,**kwargs)


class Engineer(models.Model):
    name = models.CharField(max_length=100,unique=True)
    slug = models.SlugField(max_length=100,blank=True)
    address = models.CharField(max_length=500,null=True,blank=True)

    def save(self, *args,**kwargs):
        if not self.slug:
            self.slug = slugify(self.name.replace(" ","_"))
        super(Engineer, self).save(*args,**kwargs)


class Experience(models.Model):
    enginner = models.ForeignKey(Engineer, related_name='experiences', on_delete=models.CASCADE)
    job_title = models.CharField(max_length=100,blank=True)
    description = models.TextField(max_length=500,blank=True,null=True)
    year_of_join = models.IntegerField(blank=True,null=True)
    


# sample data
# {
#     "name": "Muhammed Roshan",
#     "slug": "",
#     "address": "parali house thaikkatukara p o",
#     "experiences": [
#        {"job_title" : "Full Stack Web  Developer",
#        "description" : "Maintained and Developed lots of Responsive website using django as backend and react as frontend",
#        "year_of_join": 2024},
#        {"job_title" : "Full Stack Web  Developer",
#        "description" : "Maintained and Developed lots of Responsive website using django as backend and react as frontend",
#        "year_of_join": 2024}
#      ]
# }