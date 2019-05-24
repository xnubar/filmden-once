from django.urls import path,include 
from .views import *
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import views as auth_views
from users_app import views as user_views
from django.contrib.auth.views import password_reset




urlpatterns = [
    path('signup/', signup, name = 'signup'),
    path('login/', login_view, name = 'login'),
    path('forgot/', forgot, name='forgot'),
    path('password_change_form/', reset, name='reset'),
    url(r'^reset-password/$',password_reset,name='reset_password')


] +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)