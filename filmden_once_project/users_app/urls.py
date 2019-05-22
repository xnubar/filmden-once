from django.urls import path
from users_app.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('signup/', signup, name = 'signup'),
] +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 


# if settings.DEBUG: 
#         urlpatterns += static(settings.MEDIA_URL, 
#                               document_root=settings.MEDIA_ROOT) 
