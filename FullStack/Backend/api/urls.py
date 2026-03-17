from django.urls import path
from .views import ProjectViewSet

urlpatterns = [
    path("projects/", ProjectViewSet.as_view({
    'get': 'list',
    'post': 'create'
})),
]