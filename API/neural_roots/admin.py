from django.contrib import admin
from  .models.users import User
from .models.technology import Technology


class UserAdmin(admin.ModelAdmin):
    list_display = ('title', 'completed')

admin.site.register(User, UserAdmin)
