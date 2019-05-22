# Generated by Django 2.2.1 on 2019-05-21 12:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('films_app', '0001_initial'),
        ('comments_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='film',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='films_app.Film'),
        ),
    ]
