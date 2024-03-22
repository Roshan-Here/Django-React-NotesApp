from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.text import slugify
from django.utils import timezone
# from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class UserAccountManager(BaseUserManager):
    def _create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.is_active = True
        user.save(using=self._db)
        print(f"normal acc : {user}")
        return user
    
    def create_user(self,email=None,password=None,**extra_fields):
        extra_fields.setdefault('is_staff',False)
        extra_fields.setdefault('is_superuser',False)
        return self._create_user(email,password,**extra_fields)
    
    def create_superuser(self,email=None,password=None,**extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)
        return self._create_user(email,password,**extra_fields)
        
    
class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    date_joined = models.DateTimeField(default=timezone.now)
    last_login = models.DateTimeField(blank=True, null=True)
    
    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name
    
    def __str__(self):
        return self.email





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