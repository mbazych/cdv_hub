from rest_framework import routers
from .api import ArchiveViewSet


router = routers.DefaultRouter()
router.register('api/archive', ArchiveViewSet, basename="Archive")
urlpatterns = router.urls 