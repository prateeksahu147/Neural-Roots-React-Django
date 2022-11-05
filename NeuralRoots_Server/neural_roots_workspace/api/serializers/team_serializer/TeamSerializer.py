from rest_framework.serializers import ModelSerializer
from ....models.Project.ProjectDetails import ProjectDetails

class ProjectDetailSerializer(ModelSerializer):
    class Meta:
        model = ProjectDetails
        fields = "__all__"
