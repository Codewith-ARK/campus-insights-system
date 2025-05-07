from rest_framework import viewsets, permissions
from django.contrib.auth import get_user_model, authenticate, login
from .serializers import UserSerializer, RegisterSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer
from django.http import JsonResponse
# Optional: Custom registration endpoint


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


class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            # Serialize user data (excluding password)
            user_data = UserSerializer(user).data
            return Response({'message': 'User created successfully', 'user':user_data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MyTokenObtainPairView(TokenObtainPairView):
    # serializer_class = MyTokenObtainPairSerializer
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        access_token = response.data.get("access")
        refresh_token = response.data.get("refresh")
        
        response.set_cookie(
            key='access_token',
            value=access_token,
            httponly=True,
            secure=False,  # Set to True in production (HTTPS)
            samesite='Lax',
            path='/',
        )

        response.set_cookie(
            key='refresh_token',
            value=refresh_token,
            httponly=True,
            secure=False,
            samesite='Lax',
            path='/',
        )

        return response
    

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)

            res = Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            # Set cookies
            res.set_cookie(
                key='access_token',
                value=str(refresh.access_token),
                httponly=True,
                samesite='Lax',
                secure=False  # Set to True in production
            )
            res.set_cookie(
                key='refresh_token',
                value=str(refresh),
                httponly=True,
                samesite='Lax',
                secure=False
            )
            return res
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    def post(self, request):
        res = Response({'message': 'Logged out'}, status=status.HTTP_200_OK)
        res.delete_cookie('access_token')
        res.delete_cookie('refresh_token')
        return res

from rest_framework.permissions import IsAuthenticated

class UserProfileView(APIView):
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        print(user)
        return Response({
            'id': user.id,
            'username': user.username,
            'email': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'role': user.role
        })

# Simple username + password-based authentication
class SimpleLoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({
                'message': 'Login successful',
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email
                }
            }, status=status.HTTP_200_OK)
            # return JsonResponse({'message': 'Login successful'}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)
        
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse

@ensure_csrf_cookie
def csrf_token_view(request):
    return JsonResponse({'message': 'CSRF cookie set'})