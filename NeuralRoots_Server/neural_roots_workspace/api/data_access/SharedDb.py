from django.contrib.auth.models import User

class SharedDb:
    def __init__(self) -> None:
        pass

    def getUserID(username):
        user_id = User.objects.filter(username = username).get().id
        return user_id
