# Generated by Django 2.2.1 on 2019-05-21 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=250)),
                ('status', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Film',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('duration', models.CharField(max_length=20)),
                ('genre', models.CharField(max_length=255)),
                ('director', models.CharField(max_length=250)),
                ('review', models.CharField(max_length=800)),
                ('year', models.IntegerField()),
                ('country', models.CharField(max_length=250)),
                ('box_office', models.CharField(max_length=50)),
                ('status', models.BooleanField(default=True)),
                ('poster', models.ImageField(upload_to='static/images/')),
            ],
        ),
        migrations.CreateModel(
            name='Film_Actors',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Member_watchlist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.BooleanField(default=True)),
            ],
        ),
    ]
