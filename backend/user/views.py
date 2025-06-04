from rest_framework import viewsets, permissions, generics
from django.contrib.auth import get_user_model, authenticate, login
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate
from django.db import transaction
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token


from .serializers import UserSerializer, RegisterSerializer, UserLoginSerializer
from .models import User





# from rest_framework_simplejwt.views import TokenObtainPairView
# from rest_framework_simplejwt.tokens import RefreshToken






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


@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            # Serialize user data (excluding password)
            user_data = UserSerializer(user).data
            return Response({'message': 'User created successfully', 'user': user_data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   


#? TODO: to EDIT and IMPLEMENT JWT-based auth.
# class LoginView(APIView):
#     def post(self, request):
#         username = request.data.get('username')
#         password = request.data.get('password')

#         user = authenticate(request, username=username, password=password)

#         if user is not None:
#             refresh = RefreshToken.for_user(user)

#             res = Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
#             # Set cookies
#             res.set_cookie(
#                 key='access_token',
#                 value=str(refresh.access_token),
#                 httponly=True,
#                 samesite='Lax',
#                 secure=False  # Set to True in production
#             )
#             res.set_cookie(
#                 key='refresh_token',
#                 value=str(refresh),
#                 httponly=True,
#                 samesite='Lax',
#                 secure=False
#             )
#             return res
#         else:
#             return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# class LogoutView(APIView):
#     def post(self, request):
#         res = Response({'message': 'Logged out'}, status=status.HTTP_200_OK)
#         res.delete_cookie('access_token')
#         res.delete_cookie('refresh_token')
#         return res


class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            user = User.objects.get(id=request.user.id)
            user_data = UserSerializer(user, many=False).data
            token, created = Token.objects.get_or_create(user=user)

            user_data['token'] = token.key
            return Response(user_data, status=status.HTTP_200_OK)
        
        except User.DoesNotExist:
            return Response({"error": "User not found"})


    # def get(self, request):
    #     user = request.user
    #     user_data = {
    #         'id': user.id,
    #         'username': user.username,
    #         'email': user.email,
    #         'first_name': user.first_name,
    #         'last_name': user.last_name,
    #         'role': user.role
    #     }
    #     if hasattr(user, 'role') and user.role == 'student':
    #         user_data['batch'] = getattr(user, 'batch', None)
    #         user_data['department'] = getattr(user, 'department', None)

    #     return Response(user_data)

    

# Simple username + password-based authentication
# class SimpleLoginView(APIView):
#     def post(self, request, *args, **kwargs):
#         username = request.data.get('username')
#         password = request.data.get('password')

#         user = authenticate(username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return Response({
#                 'message': 'Login successful',
#                 'user': {
#                     'id': user.id,
#                     'username': user.username,
#                     'email': user.email,
#                     'first_name': user.first_name,
#                     'last_name': user.last_name,
#                     'role': user.role
#                 }
#             }, status=status.HTTP_200_OK)
#             # return JsonResponse({'message': 'Login successful'}, status=200)
#         else:
#             return JsonResponse({'error': 'Invalid credentials'}, status=401)
        

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
        response_data['token'] = token.key
        
        return Response(response_data, status=status.HTTP_201_CREATED, headers=headers)
    
    def perform_create(self, serializer):
        return serializer.save()
    
class UserLoginApiView(ObtainAuthToken):
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
            "token": token.key,
        }
        
        return Response(data, status=status.HTTP_200_OK)
    


        
# @ensure_csrf_cookie
# def csrf_token_view(request):
#     return JsonResponse({'message': 'CSRF cookie set'})

