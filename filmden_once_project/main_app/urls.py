from django.urls import path
from users_app.views import *
urlpatterns = [
    path('', index, name = 'index'),
]