# Generated by Django 2.2.7 on 2019-11-24 23:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20191125_0005'),
    ]

    operations = [
        migrations.AlterField(
            model_name='justification',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='student',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='teacher',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]