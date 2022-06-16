from django.db import models

class WorkspaceRoutes(models.Model):
    class Meta:
        db_table = 'WS_WorkspaceRoutes'
        
    RouteID = models.AutoField(primary_key=True, unique=True, editable=False)
    IsActive= models.CharField(max_length=1, null=False)
    RouteDisplayedName = models.CharField(max_length=20, null=False)
    Routes = models.CharField(max_length=100, null=False)
    RouteIconName = models.CharField(max_length=20, null=False) 
    Priority = models.IntegerField()

    def __str__(self) -> str:
        return self.RouteDisplayedName


    
