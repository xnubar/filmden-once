from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView
from users_app.models import Member
from .forms import MemberCreateForm
from django.urls import reverse_lazy
from django.shortcuts import render,redirect
from django.contrib.auth import login, authenticate, logout

def profile_view(request):
    user = Member.objects.get(pk=request.user.pk)
    return render(request, 'profile.html', context = {
        'user': user
    })

def dashboard_view(request):
    user = Member.objects.get(pk=request.user.pk)
    print(user.profile_image)
    return render(request, 'dashboard.html',context = {
        'user': user
    })


def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('user_email', '')
        password = request.POST.get('user_password', '')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/users/dashboard/')
    # if request.user.is_authenticated:
    #     return redirect('/')
    return render (request,"login.html")
    

def index(request):
    return render(request, 'signup.html')



def signup(request):
    print('rfr')
    if request.method == 'POST':
        form = MemberCreateForm(request.POST, files=request.FILES)
        if form.is_valid():
            form.save()
            return redirect('/about/')
        else:
           return render (request,'signup.html',  context={
        'registration_form': MemberCreateForm(request.POST, files=request.FILES)
    })
    return render(request, 'signup.html', context={
        'registration_form': MemberCreateForm()
    })

