from .models import Product
from django.shortcuts import get_object_or_404
from .serializers import ProductSerializer
from rest_framework import generics, response, views


class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductInfo(views.APIView):

    def get(self, request, slug):
        product = get_object_or_404(Product, slug=slug)
        return response.Response(ProductSerializer(product).data)