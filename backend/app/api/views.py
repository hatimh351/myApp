from rest_framework.decorators import api_view , permission_classes
from rest_framework.response import Response
from .serializers import SignUpSerializers, PostSerializer
from datetime import date
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication
from .models import User
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def verify(request):
    return Response({'status': 'ok'}, status=status.HTTP_200_OK)
 
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
        postSerializer =  PostSerializer(data=posts, many=True)
        return Response(postSerializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        user = request.user
        post = request.data
        postSerializer = PostSerializer(data=post)
        try:
            if not postSerializer.is_valid():
                return Response({'Details' :{'Fail' : postSerializer.errors}}, status=status.HTTP_400_BAD_REQUEST)
            postSerializer.save(user)
            return Response({'Details': {'Success': 'Your post was created'}}, status=status.HTTP_201_CREATED)
        
        except:
            return Response({'Details': {'Fail': "You can't post"}}, status=status.HTTP_401_UNAUTHORIZED)

    def delete(self, request, pk):
        user = request.user
        postToDelete = user.MyPosts.filter(pk=pk) 
        if postToDelete.count() != 1:
            return Response({'Details': {'Fail': "You can't delete the post"}}, status=status.HTTP_401_UNAUTHORIZED)
        postToDelete[0].delete()
        return Response({'Details': {'Success': 'Your post was deleted'}}, status=status.HTTP_200_OK)
