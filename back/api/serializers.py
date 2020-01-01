from rest_framework import serializers

from .models import Teacher, Student, Justification



""" serializer model Teacher pour creer CRUD fonctions	"""
class TeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta :
        model = Teacher
        fields = '__all__'



""" serializer model Student pour creer CRUD fonctions	"""
class StudentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta :
        model = Student
        fields = '__all__'



""" serializer model justification pour creer CRUD fonctions	"""
class JustificationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta :
        model = Justification
        fields = '__all__'