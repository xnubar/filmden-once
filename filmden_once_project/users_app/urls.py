from django.urls import path,include 
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('signup/', signup, name = 'signup'),
    path('login/', login_view, name = 'login'),
    path('forgot/', forgot, name='')
] +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)