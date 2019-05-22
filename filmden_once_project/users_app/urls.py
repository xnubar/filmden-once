from django.urls import path,include 
from users_app.views import *
from django.conf.urls import url
from users_app.login import views


urtlpatterns = [
    path('accounts/', include ('django.contrib.auth.urls')),
    path(r'^password/$', views.change_password, name='change_password'),

]
