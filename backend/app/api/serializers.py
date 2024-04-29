from rest_framework import serializers

from .models import User, Post

class PostSerializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['content', 'date_posted', 'is_public', 'owner']
        depth = 1




class SignUpSerializers(serializers.Serializer):
    username = serializers.CharField(max_length=30)
    password = serializers.CharField(max_length=50)
    created = serializers.DateField()


    def validate_username(self, value:str):
        if not value.isalnum():
            raise serializers.ValidationError('Username must contains only digits and Letters')
        if len(value) < 5:
            raise serializers.ValidationError('Username must at least be at least 7 characters')
        if User.objects.filter(username=value).count() != 0:
            raise serializers.ValidationError('Username already exist')
        return value


    def validate_password(self, value:str):
        if len(value) < 10:
            raise serializers.ValidationError('Password must be at least 10 characters')
        if  value.isalpha():
            raise serializers.ValidationError('Password must at least has one digit or one  special character')
        if value.isdigit():
            raise serializers.ValidationError('Password must at least has one letter')
        return value

    def save(self):
        user = User()
        user.username = self.validated_data.get('username')
        user.set_password(self.validated_data.get('password'))
        user.save()
