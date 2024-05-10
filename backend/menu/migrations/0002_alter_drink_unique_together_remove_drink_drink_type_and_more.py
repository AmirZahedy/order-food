# Generated by Django 5.0.4 on 2024-05-01 16:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='drink',
            unique_together=None,
        ),
        migrations.RemoveField(
            model_name='drink',
            name='drink_type',
        ),
        migrations.RemoveField(
            model_name='drink',
            name='size',
        ),
        migrations.RemoveField(
            model_name='order',
            name='drink',
        ),
        migrations.RemoveField(
            model_name='drinktype',
            name='category',
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, unique=True)),
                ('price', models.DecimalField(decimal_places=1, max_digits=6)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='menu.category')),
            ],
        ),
        migrations.DeleteModel(
            name='Size',
        ),
        migrations.DeleteModel(
            name='Drink',
        ),
        migrations.DeleteModel(
            name='Order',
        ),
        migrations.DeleteModel(
            name='DrinkType',
        ),
    ]
