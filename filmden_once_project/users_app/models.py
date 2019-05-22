from django.db import models
from django.contrib.auth.models import User


class Member(User):
    user_type = models.CharField(max_length=60)
    member_email = models.EmailField(max_length=255, unique = True, default = 'example@gmail.com')
    profile_image = models.ImageField(upload_to='images', blank=True, null=True)
    status = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Member'