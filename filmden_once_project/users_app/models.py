from django.db import models
from django.contrib.auth import User

class Member(User):
    user_type = models.CharField(max_length=60)
    profile_image = ImageField(upload_to=get_absoul, blank=True, null=True)
    status = models.BooleanField(default=True)
