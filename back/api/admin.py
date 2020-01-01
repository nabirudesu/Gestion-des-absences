from django.contrib import admin

from .models import Teacher ,Student, Justification


# Register your models here.

""" Ajouter models a l'admin Tableau de bord """

admin.site.register(Teacher)
admin.site.register(Student)
admin.site.register(Justification)