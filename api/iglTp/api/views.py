from rest_framework import viewsets

from .serializers import TeacherSerializer, StudentSerializer, JustificationSerializer
from .models import Teacher, Student, Justification

# Create your views here.


class TeacherViewSet(viewsets.ModelViewSet) :
    queryset = Teacher.objects.all().order_by('id')
    serializer_class = TeacherSerializer

class StudentViewSet(viewsets.ModelViewSet) :
    queryset = Student.objects.all().order_by('id')
    serializer_class = StudentSerializer

class JustificationViewSet(viewsets.ModelViewSet) :
    queryset = Justification.objects.all().order_by('id')
    serializer_class = JustificationSerializer