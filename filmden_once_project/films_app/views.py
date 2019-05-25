from django.shortcuts import render
from django.views.generic.edit import CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Film
from django.urls import reverse_lazy
from users_app.models import Member

def films_list(request):
    print(request.user)
    return render(request, "films_list.html")

# def create_film(request):
#     return render(request, "create_film.html")

class CreateFilm(LoginRequiredMixin, CreateView):
    model = Film
    login_url = reverse_lazy('login')
    template_name = 'create_film.html'
    fields = ('title','description')

    def form_valid(self, form):
        form.instance.member = Member.objects.get(pk=self.request.user.pk)
        return super(LoginRequiredMixin, self).form_valid(form)



def watch_list(request):
    print(request.user)
    return render(request, "films_list.html")