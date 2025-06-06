# Generated by Django 5.1.4 on 2025-05-03 10:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('feedback', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Insight',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('generated_at', models.DateTimeField(auto_now_add=True)),
                ('summary', models.TextField()),
                ('sentiment_score', models.FloatField()),
                ('keywords', models.JSONField()),
                ('metadata', models.JSONField()),
                ('form', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='feedback.feedbackform')),
            ],
        ),
    ]
