from django.db import models

class User(models.Model):
    title = models.CharField(max_length=120)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
