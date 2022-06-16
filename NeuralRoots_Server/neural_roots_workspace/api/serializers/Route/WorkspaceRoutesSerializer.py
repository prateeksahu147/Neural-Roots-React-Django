from rest_framework.serializers import ModelSerializer
from ....models.Routes.WorkspaceRoutes import WorkspaceRoutes

class WorkspaceRouteListSerializer(ModelSerializer):
    class Meta:
        model = WorkspaceRoutes
        fields = '__all__'
