from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('workspace-api/', include('neural_roots_workspace.api.urls')),
]
