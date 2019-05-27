from django.urls import path
from .views import *


urlpatterns = [
    path("", FilmList.as_view(), name="films_list"),
    path("watchlist/", WatchList.as_view(), name="watch_list"),
    path("create/", CreateFilm.as_view(success_url="/users/dashboard"), name="create"),
    path("remove/<int:pk>/",RemoveFilm.as_view(success_url="/users/dashboard"), name="remove")
]
