from rest_framework import serializers
from car_reservation.models import CarReservation

# CarReservation Serializer
class CarReservationSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField()

    class Meta:
        model = CarReservation
        #fields = ('id', 'user', 'car', 'start_date_formatted', 'end_date_formatted', 'purpose', 'active')
        fields = "__all__"
