from django.shortcuts import render,redirect


def login(request):
    return render (request,"login.html")

def index(request):
    return render(request, 'signup.html')


def create(request):
    email = request