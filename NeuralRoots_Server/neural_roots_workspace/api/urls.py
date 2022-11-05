from django.urls import path
from .views.Authentication.AuthView import MyTokenObtainPairView
from .views.Employee.EmployeeView import EmployeeList
from .views.Authentication.AuthView import getRoutes, getNotes
from .views.Route.WorkspaceRoutesView import WorkspaceRouteList
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,)
from .views.Team.TeamView import  *

urlpatterns = [
    path('', getRoutes),
    path('notes/', getNotes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    #path('employee-list/<str:username>/', hello_world, name='employee-list'),
    path('employee-list/<str:username>/',getTeamMembers, name='employee-list'),
    path('all-routes/', WorkspaceRouteList.as_view(), name = 'all-route'),
    #path('project-detail/', getProjectDetail, name = 'project-detail')
    path('project-detail/', ProjectDetail.as_view(), name = 'project-detail')
]
