from django.shortcuts import render
from .models import Post
# Create your views here.
def home(request):
    posts = post.objects.all()
    return render(request,'posts/home.html',{'posts':posts})
