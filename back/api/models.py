
from django.db import models


# Create your models here.

class Teacher(models.Model):

    """ teachers's database model	"""

    email = models.EmailField()
    password = models.CharField(max_length=255)
    fullName = models.CharField(max_length=255)

    def __str__(self):
        return str(self.email)
    



class Student(models.Model):

    """ student's database model	"""

    teacher =  models.ForeignKey(Teacher,  on_delete=models.DO_NOTHING)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    fullName = models.CharField(max_length=255)

    def __str__(self):
        return str(self.email)
    



class Justification(models.Model):

    """ justifiction's database model	"""


    student = models.ForeignKey(Student, on_delete = models.DO_NOTHING)
    cause = models.CharField(max_length=255)
    date = models.DateField()
    image = models.ImageField(upload_to="img/", default="")

    def __str__(self):
        return str(self.date)
    


    






