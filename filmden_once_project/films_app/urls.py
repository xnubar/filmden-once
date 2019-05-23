from django.urls import path
from .views import *


urlpatterns = [
    path("", films_list, name="films_list"),
    path("watchlist/", watch_list, name="watch_list"),
]
