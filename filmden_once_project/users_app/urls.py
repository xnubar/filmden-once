from django.urls import path,include 
from users_app.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('signup/', signup, name = 'signup'),
    path('login/', login, name = 'login'),
    path('accounts/', include ('django.contrib.auth.urls')),
] +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 


