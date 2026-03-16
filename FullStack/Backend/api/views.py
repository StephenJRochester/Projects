from django.shortcuts import render
from django.http import JsonResponse
from models import Project, TimeEntry
from serializer import ProductSerializer, TimeEntrySerializer


def hello(request):
    return JsonResponse({"message": "Hello from Django"})
def bye(request):
    return JsonResponse({"message2": "Goodbye from Django"})
# Create your views here.
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProductSerializer

class TimeEntryViewSet(viewsets.ModelViewSet):
    queryset = TimeEntry.objects.all()
    serializer_class = TimeEntrySerializer
    