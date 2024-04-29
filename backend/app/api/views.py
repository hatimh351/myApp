from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SignUpSerializers, PostSerializers
from datetime import date
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication
from .models import User


@api_view(['POST'])
def signUp(request):
    request.data['created'] = date.today()

    serializer = SignUpSerializers(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response({'Details' : {'Success': 'your account is created'}})
    return Response({'Details' :{'Fail' : serializer.errors}}, status=status.HTTP_400_BAD_REQUEST)


class Post(APIView):
    authentication_classes  = [JWTTokenUserAuthentication]

    def get(self, request):
        user = request.user
        posts = user.MyPosts.filter(is_public=True)
        postSerializer =  PostSerializers(data=posts, many=True)
        return Response(postSerializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        user = request.user
        post = request.data
        
