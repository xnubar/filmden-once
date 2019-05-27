from django.db import models
from users_app.models import Member


class Film(models.Model):
    title = models.CharField(max_length=150)
    duration = models.CharField(max_length=20)
    genre = models.CharField(max_length=255)
    director = models.CharField(max_length=250)
    review = models.CharField(max_length=800)
    year = models.IntegerField(null=True)
    country = models.CharField(max_length=250)
    box_office = models.CharField(max_length=50)
    member = models.ForeignKey(Member,  on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
    poster = models.ImageField(upload_to='images/')
    actors = models.ManyToManyField("films_app.Actor")
    
    def __str__(self):
        return self.title


class Actor(models.Model):
    fullname = models.CharField(max_length=250)
    status = models.BooleanField(default=True)



class Member_watchlist(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
