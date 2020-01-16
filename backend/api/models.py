from django.db import models
from django.utils.timezone import now

#Teacher model
class Teacher(models.Model):

    username = models.CharField(max_length=255 , default="")
    email = models.EmailField()
    fullName = models.CharField(max_length=255, default="")

    def __str__(self):
        return self.fullName
    
#Student model
class Student(models.Model):
  
    username = models.CharField(max_length=255,default="")
    email = models.EmailField()    
    absences = models.IntegerField(default=0 )
    fullName = models.CharField(max_length=255,default="")


    def __str__(self):
        return self.fullName

#Picture upload path
def upload_path(instance , filename):
    return '/'.join(['justifications',str(instance.teacher.fullName) , filename])

#Justification model   
class Justification(models.Model):
   
    student = models.ForeignKey(Student, on_delete = models.DO_NOTHING)
    teacher = models.ForeignKey(Teacher, on_delete = models.DO_NOTHING, default='---')
    cause = models.CharField(max_length=1000 , default='')
    date = models.DateTimeField(default=now, editable=False)
    image = models.ImageField(upload_to=upload_path, blank=True , null=True , default='')

    def __str__(self):
        return str(self.id)
    


    