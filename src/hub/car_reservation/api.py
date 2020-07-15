from car_reservation.models import CarReservation
from rest_framework import  viewsets, permissions
from .serializers import CarReservationSerializer

# CarReservationViewSet

class CarReservationViewSet(viewsets.ModelViewSet):
    queryset = CarReservation.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = CarReservationSerializer 