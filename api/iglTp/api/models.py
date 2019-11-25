
from django.db import models


# Create your models here.

class Teacher(models.Model):

    id = models.AutoField(primary_key=True, unique=True)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    fullName = models.CharField(max_length=255)

    def __str__(self):
        return str(self.id)
    



class Student(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    teacher =  models.ForeignKey(Teacher,  on_delete=models.DO_NOTHING)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    fullName = models.CharField(max_length=255)

    def __str__(self):
        return str(self.id)
    



class Justification(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    student = models.ForeignKey(Student, on_delete = models.DO_NOTHING)
    cause = models.CharField(max_length=255)
    date = models.DateField()
    image = models.ImageField(upload_to="img", default="")

    def __str__(self):
        return str(self.id)
    


    






