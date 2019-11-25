from rest_framework import serializers

from .models import Teacher, Student, Justification

class TeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta :
        model = Teacher
        fields = '__all__'


class StudentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta :
        model = Student
        fields = '__all__'

class JustificationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta :
        model = Justification
        fields = '__all__'