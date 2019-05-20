from django.db import models
from users_app.models import Member
from films_app.models import Film


class Comment(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    text = models.CharField(max_length=800)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now_add=True)


class News(models.Model):
    title = models.CharField(max_length=150)
    image = models.ImageField(upload_to='/static/images/')
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now_add=True)
    text = models.CharField(max_length=1000)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)

    


