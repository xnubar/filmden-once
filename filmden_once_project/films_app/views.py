from django.shortcuts import render,redirect
from django.views.generic.edit import CreateView,DeleteView
from django.views.generic.list import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Film
from django.urls import reverse_lazy
from users_app.models import Member
from films_app.models import Member_watchlist
from django.core.exceptions import ValidationError
from django.http import JsonResponse, HttpResponse
import json


class CreateFilm(LoginRequiredMixin, CreateView):
    model = Film
    login_url = reverse_lazy('login')
    template_name = 'create_film.html'
    fields = ('title', 'duration', 'genre', 'director', 'year', 'country', 'box_office', "poster", "review", )

    def form_valid(self, form):
        form.instance.member = Member.objects.get(pk=self.request.user.pk)
        return super(LoginRequiredMixin, self).form_valid(form)

class RemoveFilm(LoginRequiredMixin, DeleteView):
    model = Film
    login_url = reverse_lazy('login')
    template_name = 'remove_film.html'
    success_url=reverse_lazy('films_list')

 
class FilmList(ListView):
    model = Film
    login_url = reverse_lazy('login')
    template_name = 'films_list.html'

    def get_queryset(self):
        qs = super().get_queryset()
        if self.request.user:
            qs = qs.filter(member=self.request.user).order_by('title')
        return qs

class WatchList(LoginRequiredMixin, ListView):
    model = Member_watchlist
    login_url = reverse_lazy('login')
    template_name = 'films_list.html'

    def get_queryset(self):
        qs = super().get_queryset()
        qs = qs.filter(member=self.request.user).order_by('film__title')

        return qs



