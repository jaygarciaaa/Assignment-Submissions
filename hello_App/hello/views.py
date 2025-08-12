from django.shortcuts import render
from django.http import HttpResponse

def hello_world(request): # currently unused
    return HttpResponse("Hello, World! This is your first Django view.")

def hello_template(request):
    return render(request, "hello/hello.html")

def about_template(request):
    return render(request, "hello/about.html")

def contact_template(request):
    return render(request, 'hello/contact.html')