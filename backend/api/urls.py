from django.urls import include, path
from rest_framework import routers
from . import views
from rest_framework.authtoken.views import ObtainAuthToken
from django.conf.urls.static import static
from django.conf import settings
# routers creation
router = routers.DefaultRouter()
router.register('User', views.UserViewSet)
router.register('Teacher', views.TeacherViewSet)
router.register('Student' , views.StudentViewSet)
router.register('Justification' , views.JustificationViewSet)
#routers implementation
urlpatterns = [
    path('auth/', ObtainAuthToken.as_view()),

    path('api/', include(router.urls)),
]
# pictures urls
urlpatterns += static( settings.MEDIA_URL , document_root=settings.MEDIA_ROOT)
