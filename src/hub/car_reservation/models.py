from django.db import models
from datetime import datetime,timedelta
from django.utils.timezone import now
from django.utils.dateformat import format
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.

def in_three_days():
    return timezone.now() + timedelta(days=3)


class CarReservation(models.Model):
    CAR_CHOICES = [
        ('Skoda Superb', 'Skoda Superb'), 
        ('Skoda Octavia', 'Skoda Octavia')
    ]

    owner = models.ForeignKey(User, on_delete = models.CASCADE)
    car = models.CharField(max_length = 32, choices = CAR_CHOICES)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    purpose = models.CharField(max_length = 64)
    active = models.BooleanField(default = False)

    # def start_date_formatted(self):
    #     return format(self.start_date, 'd-m-Y H:i')

    # def end_date_formatted(self):
    #     return format(self.end_date, 'd-m-Y H:i')

    #def __str__(self):
    #    return '{}, {}, {} - {}, {}'.format(self.car, self.user.get_full_name(), format(self.start_date, 'd-m-Y H:i'), format(self.end_date, 'd-m-Y H:i'), self.purpose)

    class Meta:
        db_table = 'car_reservations'
        ordering = ['end_date']



