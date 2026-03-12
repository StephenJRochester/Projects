from django.shortcuts import render
from django.http import JsonResponse

def hello(request):
    return JsonResponse({"message": "Hello from Django"})
def bye(request):
    return JsonResponse({"message2": "Goodbye from Django"})
# Create your views here.
