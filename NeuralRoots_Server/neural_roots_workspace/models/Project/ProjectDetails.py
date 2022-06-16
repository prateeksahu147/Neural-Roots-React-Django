from django.db import models

class ProjectDetails(models.Model):
    class Meta:
        db_table = 'WS_ProjectDetails'
    
    ProjectCode = models.CharField(primary_key=True, max_length=5)
    ProjectName = models.CharField(max_length=50)
    ProjectTechnology = models.CharField(max_length=10)
    ProjectCategory = models.CharField(max_length=15)
    IsActive = models.BooleanField(max_length=1)

    def __str__(self) -> str:
        return self.ProjectName