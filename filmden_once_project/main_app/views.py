from django.shortcuts import render,redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy

def logout_view(request):
    logout(request)
    return redirect('/')

def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')



def products(request):
    return render(request, 'products.html')

