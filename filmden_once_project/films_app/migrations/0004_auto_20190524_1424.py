# Generated by Django 2.2.1 on 2019-05-24 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films_app', '0003_film_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='year',
            field=models.IntegerField(null=True),
        ),
    ]
