from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

from .views import signUp, Post, verify

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('sign-up/', signUp, name='singUp'),
    path('verify/', verify, name='token_verify'),
    path('post/', Post.as_view(), name='post')
]
