from rest_framework import serializers
from archive.models import Archive

# CarReservation Serializer
class ArchiveSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField()

    class Meta:
        model = Archive
        fields = "__all__"
