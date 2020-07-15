from archive.models import Archive
from rest_framework import  viewsets, permissions
from .serializers import ArchiveSerializer

# CarReservationViewSet

class ArchiveViewSet(viewsets.ModelViewSet):
    queryset = Archive.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ArchiveSerializer 