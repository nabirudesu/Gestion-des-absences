# Generated by Django 2.2.7 on 2019-11-25 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_auto_20191125_1655'),
    ]

    operations = [
        migrations.AlterField(
            model_name='justification',
            name='date',
            field=models.DateField(),
        ),
    ]
