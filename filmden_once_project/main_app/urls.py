from django.urls import path
from main_app.views import *
urlpatterns = [
    path('', index, name = 'index'),
    path('contact/', contact, name = 'contact'),
    path('about/', about, name = 'about'),
    path('logout/', logout_view, name='index'),
    path('signup/', registration, name='signup'),
    path('login/', login_view, name='login'),
]