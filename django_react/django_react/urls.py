from django.urls import path, include
from django.contrib import admin
from django.contrib.auth.views import LoginView


urlpatterns = [
    path('', include('products.urls')),
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('accounts/login/', LoginView.as_view()),
]