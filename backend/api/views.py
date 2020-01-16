from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .serializers import TeacherSerializer, StudentSerializer, JustificationSerializer , UserSerializer
from .models import Teacher, Student, Justification 
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.http import HttpResponse
from django.core.serializers import json



# Create your views here.

class UserViewSet(viewsets.ModelViewSet) :
    
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer
    
class TeacherViewSet(viewsets.ModelViewSet) :
    queryset = Teacher.objects.all().order_by('id')
    serializer_class = TeacherSerializer

class StudentViewSet(viewsets.ModelViewSet) :
    queryset = Student.objects.all().order_by('id')
    serializer_class = StudentSerializer

class JustificationViewSet(viewsets.ModelViewSet) :
    queryset = Justification.objects.all().order_by('id')
    serializer_class = JustificationSerializer
    def post(self , request , *args , **kwargs):
        student = request.data['student']
        teacher = request.data['teacher']
        cause  = request.data['cause']
        image  = request.data['image']       
        Justification.objects.create(student=student, teacher=teacher , cause =cause , image =image)  
        return HttpResponse({ 'message' : 'Justification created'} , status=200)