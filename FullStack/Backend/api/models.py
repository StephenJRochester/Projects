from django.db import models

# Create your models here.
class Project(models.Model):
    code = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()


class TimeEntry(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    user = models.CharField(max_length=100)
    date = models.DateField()
    hours = models.FloatField