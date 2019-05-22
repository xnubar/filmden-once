from django import forms
from .models import Member

class MemberCreateForm(forms.ModelForm):
    class Meta:
        model = Member
        fields = ('first_name', 'last_name', 'username', 'password', 'profile_image', 'member_email')
      
