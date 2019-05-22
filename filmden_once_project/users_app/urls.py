from django.urls import path,include 
from users_app.views import *



urtlpatterns = [
    path('accounts/', include ('django.contrib.auth.urls')),
]
