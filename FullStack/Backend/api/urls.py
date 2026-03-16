from django.urls import path
from .views import hello, bye
from .views import ProjectViewSet

urlpatterns = [
    path("hello/", hello),
    path("bye/", bye),
    path("projects/", ProjectViewSet.as_view({'get': 'list'})),
]