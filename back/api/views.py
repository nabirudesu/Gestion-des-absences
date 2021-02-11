from rest_framework import viewsets

from .serializers import TeacherSerializer, StudentSerializer, JustificationSerializer
from .models import Teacher, Student, Justification

# Create your views here.


class TeacherViewSet(viewsets.ModelViewSet) :
    
    """ creer viewset pour model Teacher pour creer CRUD fonctions	"""
    
    queryset = Teacher.objects.all().order_by('email')
    serializer_class = TeacherSerializer

class StudentViewSet(viewsets.ModelViewSet) :

    """ creer viewset pour model Student pour creer CRUD fonctions	"""

    queryset = Student.objects.all().order_by('email')
    serializer_class = StudentSerializer

class JustificationViewSet(viewsets.ModelViewSet) :

    """ creer viewset pour model justification pour creer CRUD fonctions	"""

    queryset = Justification.objects.all().order_by('date')
    serializer_class = JustificationSerializer