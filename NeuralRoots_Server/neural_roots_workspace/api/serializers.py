from rest_framework.serializers import ModelSerializer
from neural_roots_workspace.models  import Note

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'