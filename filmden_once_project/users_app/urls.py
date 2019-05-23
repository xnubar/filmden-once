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
    path('forgot/', forgot, name=''),
    path('password-reset/',auth_views.PasswordResetView.as_view(template_name='password_reset.html'),name='password_reset'),
     path('password-reset/done/',auth_views.PasswordResetDoneView.as_view(template_name='password_reset_done.html'),name='password_reset_done'),
] +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)