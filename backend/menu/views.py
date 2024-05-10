from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import CategorySerializer, ItemSerializer

from .models import Category, Item




class CategoryListView(APIView):

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True, context={'request': request})
        return Response(serializer.data)



class ItemListView(APIView):

    def get(self, request):
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True, context={'request': request})
        return Response(serializer.data)