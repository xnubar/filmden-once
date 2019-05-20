from django.db import models
from django.contrib.auth.models import User

class Member(User):
    user_type = models.CharField(max_length=60)
    profile_image = models.ImageField(upload_to='static/images', blank=True, null=True)
    status = models.BooleanField(default=True)
