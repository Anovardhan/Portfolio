from django.db import models

# Create your models here.

class Myself(models.Model):
    name = models.CharField(max_length=225)
    about = models.TextField()
    profile_image = models.ImageField(upload_to='myself/' , blank=True , null=True)

    def __str__(self):
        return self.name

class Education(models.Model):
    institution_name = models.CharField(max_length=225)
    institution_image = models.ImageField(upload_to='education/' ,blank=True , null=True)
    year_span = models.CharField(max_length=50)
    gpa_percentage = models.CharField(max_length=50)

    def __str__(self):
        return self.institution_name

class About(models.Model):
    my_journey = models.TextField()
    title = models.CharField(max_length=225)
    image = models.ImageField(upload_to='about/' , blank=True , null=True)
    information = models.CharField(max_length=1000)

    def __str__(self):
        return self.title

class Resume(models.Model):
    title = models.CharField(max_length=255,default='My Resume')
    resume_file = models.FileField(upload_to = 'resume/')

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=225)
    email= models.EmailField()
    subject = models.CharField(max_length=225)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email

class Project(models.Model):
    title = models.CharField(max_length=226)
    short_description= models.CharField(max_length=600)
    link = models.URLField(blank=True,null=True)
    image = models.ImageField(upload_to='projects/' ,blank=True,null=True)
    tags = models.CharField(max_length=266,blank=True)
   
    def __str__(self):
        return self.title
    
class Profile(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class ProfileImage(models.Model):
    profile = models.ForeignKey(Profile,on_delete=models.CASCADE,related_name="images")
    image = models.ImageField(upload_to='profile_images/')

    def __str__(self):
        return f"{self.profile.name} -Image"
    
class MyInformation(models.Model):
    name = models.CharField(max_length=255)

    village_image = models.ImageField(upload_to='village_images/')
    current_village_image = models.ImageField(upload_to='current_village_images/')

    my_image1 = models.ImageField(upload_to='my_images/')
    my_image2 = models.ImageField(upload_to='my_images/')
    my_image3 = models.ImageField(upload_to='my_images/')

    def __str__(self):
        return self.name

class Skills(models.Model):
    skill_name = models.CharField(max_length=100)
    skill_image = models.ImageField(upload_to='skill_images')
    

