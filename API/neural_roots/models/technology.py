from django.db import models

class Technology(models.Model):
    Title = models.CharField(max_length=120,primary_key=True)
    Status = models.CharField(max_length=3)
    #Logo =  models.ImageField()
    About = models.TextField()
    EffectiveDate = models.DateTimeField(auto_now_add=True)
    TerminationDate = models.DateTimeField()

    def _str_(self):
        return self.title