from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView
from users_app.models import Member
from .forms import MemberCreateForm
from django.urls import reverse_lazy
from django.shortcuts import render,redirect
from django.contrib.auth import login, authenticate, logout
from .models import Film
from users_app.models import Member
from django.template import loader
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages
import string
import random

def profile_view(request):
    if request.method == 'POST':
        user =Member.objects.get(pk=request.user.pk)
        password = request.POST.get("password","")
        if password!="":
            print(f'password ee: {password}')
            user.password = password 
        user.first_name = request.POST.get("first_name","")
        user.last_name = request.POST.get("last_name","")
        image_path = request.POST.get("profile_pic","")
        if image_path and image_path != user.profile_image:
            Member.objects.get(pk=1).profile_image.delete(save=True)
            user.profile_image = image_path
        user.save()
    user = Member.objects.get(pk=request.user.pk)
    print(user.password)
    return render(request, 'profile.html', context = {
        'user': user
    })

def dashboard_view(request):
    user = Member.objects.get(pk=request.user.pk)
    return render(request, 'dashboard.html',context = {
        'user': user
    })



def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('user_email', '')
        password = request.POST.get('user_password', '')
        username = request.POST.get('user_email', '')
        password = request.POST.get('user_password', '')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/users/dashboard/')
    # if request.user.is_authenticated:
    #     return redirect('/')
    return render (request,"login.html")
    


def signup(request):
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


def reset(request):
    if request.method == 'POST':
        password1=request.POST.get('password1')
        password2=request.POST.get('password2')
        user.password1=user.password2
        return redirect('/login/')
    return render(request, 'password_change_form.html')


def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))
confirmation_code=None
def forgot(request):
    if request.method == 'POST':
        try:
            member = Member.objects.get(member_email=request.POST.get('user_email',''))
            if member:
                global confirmation_code
                subject= "Filmden once forgot password"
                confirmation_code = id_generator()
                message = "Your confirmation code is: " +confirmation_code
                from_email=settings.EMAIL_HOST_USER
                send_mail(subject,
                          message, from_email, [request.POST.get('confirm_code','')], fail_silently=False)
                return redirect('/users/confirm/')
        except Exception as err:
            return redirect('/users/login')
    return render(request, 'forgot.html')

def create_film(request):
    return render(request,'create_film.html')

def confirm_code(request):
    if request.method == 'POST':
        code = request.POST.get('confirm_code','')
        if code==confirmation_code:
            return redirect('/users/reset/')
    return render(request, 'code_confirmation.html')

def reset(request):
    if request.method=='POST':
        password=request.POST.get('password','')
        re_password=request.POST.get('re_password','')
        if password==re_password:
            user =Member.objects.get(pk=request.user.pk)
            user.password = password
            user.save()
            return redirect('/users/login/')
    return render(request, "new_password.html")

class Film(CreateView):
    model = Film
    template_name = 'create_film.html'
    fields = '__all__'

