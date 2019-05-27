from django.urls import path,include 
from .views import *
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import views as auth_views
from users_app import views as user_views




urlpatterns = [
    path('signup/', signup, name = 'signup'),
    path('login/', login_view, name = 'login'),
    path('create_film', Film.as_view(),name='create_film'),
    path('dashboard/', dashboard_view, name = 'dashboard'),
    path('profile/', profile_view, name = 'profile'),
    path('forgot/', forgot, name=''),
    path('confirm/', confirm_code, name='confirm_code'), 
    path('reset/', reset, name='reset_password'), 
] +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 

