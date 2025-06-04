from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'role',
            'department',
            'batch',
            'enrollment_number',
            'is_active',
        ]
        read_only_fields = ['id', 'is_active']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            'username',
            'first_name',
            'last_name',
            'password',
            'confirm_password',
            'role',
            'department',
            'enrollment_number',
            'batch',
            "is_active"
        ]

        read_only_fields = ["id", "email",  "is_active"]


    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({"password": "Passwords must match."})
        return data

    def create(self, validated_data):
        password = validated_data.pop("password")
        validated_data.pop("confirm_password") 
        user = User.objects.create_user(password=password, **validated_data)
        return user
    



# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)

#         # Add custom claims (optional)
#         token['username'] = user.username
#         token['role'] = user.role

#         return token




    
class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={"input_type": "password"}, trim_whitespace = False, write_only=True)
    
    def validate(self, attrs):
        username = attrs.get('username')
        password =  attrs.get('password')
                
        if username and password:
            user = authenticate(request=self.context.get('request'), username=username, password=password)
            
            if not user:
                raise serializers.ValidationError("Unable to login with provided credentials!", code='authorization')
            
        else: 
            raise serializers.ValidationError("Email and Password are required!", code="authorization")
        
        attrs['user'] = user
        return attrs