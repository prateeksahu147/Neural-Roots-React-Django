from ....models.Routes.WorkspaceRoutes import WorkspaceRoutes
from ...serializers.Route.WorkspaceRoutesSerializer import WorkspaceRouteListSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from Utils.DataConstants.StatusConst import Status
from rest_framework.permissions import IsAuthenticated

class WorkspaceRouteList(APIView):
    
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            all_routes_list = WorkspaceRoutes.objects.filter(IsActive = Status.Active).order_by('Priority')
            all_routes_list_serializer = WorkspaceRouteListSerializer(all_routes_list, many=True)
            status_ = status.HTTP_200_OK
        except Exception as e:
            all_routes_list_serializer = None
            status_ = status.HTTP_400_BAD_REQUEST
        return Response(all_routes_list_serializer.data, status=status_)





