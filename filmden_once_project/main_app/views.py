from django.shortcuts import render,redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy

def logout_view(request):
    logout(request)
    return redirect('index.html')

@login_required(login_url=reverse_lazy('login'))
def indexpage(request):

    # logout(request)

    return render(request, 'index.html')

# def login_view(request):
#     if request.user.is_authenticated:
#         return redirect('index')

#     if request.method == 'POST':
#         print('frfer')
#         username = request.POST.get('user-email', '')
#         password = request.POST.get('password', '')
#         print(f'username: {username}, password: {password}')
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return redirect('index')

    return render(request, 'login.html')

def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')



def products(request):
    return render(request, 'products.html')

