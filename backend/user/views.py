from rest_framework import viewsets, permissions, generics
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth import get_user_model
from django.db import transaction

from .serializers import UserSerializer, RegisterSerializer, UserLoginSerializer
from .models import User

User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.action in ['create']:
            return [permissions.AllowAny()]
        elif self.action in ['list', 'destroy']:
            return [permissions.IsAdminUser()]
        return [permissions.IsAuthenticated()]

# class UserProfileView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         try:
#             user = User.objects.get(id=request.user.id)
#             user_data = UserSerializer(user, many=False).data
#             token, created = Token.objects.get_or_create(user=user)

#             user_data['token'] = token.key
#             return Response(user_data, status=status.HTTP_200_OK)
        
#         except User.DoesNotExist:
#             return Response({"error": "User not found"})

class UserSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    
    @transaction.atomic
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        user = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        
        token, created = Token.objects.get_or_create(user=user)
        
        response_data = serializer.data
        
        return Response({"user":response_data, "token":token.key}, status=status.HTTP_201_CREATED, headers=headers)
    
    def perform_create(self, serializer):
        return serializer.save()
    
class UserLoginApiView(ObtainAuthToken):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserLoginSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        
        data = {
            'id' : user.id,
            "email": user.email,
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'role': user.role,
            'department': user.department,
            'batch': user.batch,
            'enrollment_number': user.enrollment_number,
            'is_active': user.is_active,
        }
        
        return Response({"user":data, "token":token.key}, status=status.HTTP_200_OK)