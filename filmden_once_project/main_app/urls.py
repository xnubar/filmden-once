from django.urls import path
from main_app.views import *

urlpatterns = [
    path('', index, name = 'index'),
    path('contact/', contact, name = 'contact'),
    path('about/', about, name = 'about'),
    path('signup/', about, name = 'signup'),
    path('logout/', logout_view, name='index'),
  
    
    # path('login/', login_view, name='login'),
    #<a href="{% url 'password_change'%}" class="login__tracker form__tracker">Forgot password?</a>

]