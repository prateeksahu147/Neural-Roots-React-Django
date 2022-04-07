from rest_framework import viewsets
from .serializers import TodoSerializer
from models.home.services import Services
from models.home.technology import Technology

class ServiceView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    