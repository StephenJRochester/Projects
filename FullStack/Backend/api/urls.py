from django.urls import path
from .views import hello, bye


urlpatterns = [
    path("hello/", hello),
    path("bye/", bye)
]