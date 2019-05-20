from django.db import models

class News(models.Model):
    title = models.CharField(max_length=150)
    image = models.ImageField(upload_to='/static/images/')
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now_add=True)
    text = models.CharField(max_length=1000)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)