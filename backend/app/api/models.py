from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from datetime import date

class CustomUserManager(BaseUserManager):
    def create_user(self, username, password, **extra_fields):

        if not username:
            raise ValueError(("The username must be set"))
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save()
        return user

class User(AbstractBaseUser):

    username = models.CharField(max_length=40, unique=True)
    date_joined = models.DateField(default=date.today)
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = []
    def __str__(self) -> str:
        return "'{}'".format(self.username, self.date_joined)



class Post(models.Model):
    content = models.TextField()
    date_posted = models.DateField(default=date.today)
    is_public= models.BooleanField(default=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE,  related_name='MyPosts')
