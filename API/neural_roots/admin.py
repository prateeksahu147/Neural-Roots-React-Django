from django.contrib import admin
from  .models.users import User

class UserAdmin(admin.ModelAdmin):
    list_display = ('title', 'completed')

admin.site.register(User, UserAdmin)
