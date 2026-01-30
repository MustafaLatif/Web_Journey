from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def all_sites(request):
    return render(request,'my_app/templates/index.html')