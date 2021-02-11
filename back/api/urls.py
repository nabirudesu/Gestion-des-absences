from django.urls import include, path
from rest_framework import routers
from . import views


router = routers.DefaultRouter()

"""creer des routers pour notre models  """

router.register(r'Teacher', views.TeacherViewSet)
router.register(r'Student' , views.StudentViewSet)
router.register(r'Justification' , views.JustificationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
