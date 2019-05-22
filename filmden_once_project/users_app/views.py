from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView
from users_app.models import Member
from .forms import MemberCreateForm
from django.urls import reverse_lazy


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
