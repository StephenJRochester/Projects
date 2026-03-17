from django.shortcuts import render
from django.http import JsonResponse
from .models import Project, TimeEntry
from .serializer import ProductSerializer, TimeEntrySerializer
from rest_framework import viewsets



# Create your views here.
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProductSerializer

class TimeEntryViewSet(viewsets.ModelViewSet):
    queryset = TimeEntry.objects.all()
    serializer_class = TimeEntrySerializer
