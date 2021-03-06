# Generated by Django 2.2.7 on 2019-11-24 20:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20191124_2041'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='Teacher',
            new_name='teacher',
        ),
        migrations.AlterField(
            model_name='student',
            name='id',
            field=models.IntegerField(auto_created=True, primary_key=True, serialize=False, unique=True),
        ),
        migrations.CreateModel(
            name='Justification',
            fields=[
                ('id', models.IntegerField(auto_created=True, primary_key=True, serialize=False, unique=True)),
                ('cause', models.CharField(max_length=255)),
                ('Student', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.Student')),
            ],
        ),
    ]
