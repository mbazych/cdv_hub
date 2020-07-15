from django.db import models
from datetime import datetime,timedelta
from django.utils.timezone import now
from django.utils.dateformat import format
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Archive(models.Model):
    CAR_CHOICES = [
        ('Skoda Superb', 'Skoda Superb'), 
        ('Skoda Octavia', 'Skoda Octavia')
    ]

    FUEL_AND_GAS = [
        ('1/4', '1/4'),
        ('2/4', '2/4'),
        ('3/4', '3/4'),
        ('4/4', '4/4')
    ]

    owner = models.ForeignKey(User, on_delete = models.CASCADE)
    car = models.CharField(max_length = 32, choices = CAR_CHOICES)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField(auto_now=True)
    purpose = models.CharField(max_length = 64)
    gas = models.CharField(max_length = 3, choices = FUEL_AND_GAS, default="1/4")
    fuel = models.CharField(max_length = 3, choices = FUEL_AND_GAS, default="1/4")
    comment = models.CharField(max_length = 32, default="No comment")
    mileage = models.IntegerField()

    class Meta:
        db_table = 'archive'
        ordering = ['end_date']