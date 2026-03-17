
from .models import Project, TimeEntry
from .serializer import ProductSerializer, TimeEntrySerializer
from rest_framework import viewsets



# Create your views here.
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        company = self.request.query_params.get('company')
        if company:
            queryset = queryset.filter(company=company)
        return queryset


class TimeEntryViewSet(viewsets.ModelViewSet):
    queryset = TimeEntry.objects.all()
    serializer_class = TimeEntrySerializer

