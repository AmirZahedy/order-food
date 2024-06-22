from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status


from .serializers import CategorySerializer, ItemSerializer, OrderSerializer

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

class OrderPostView(APIView):
    def post(self, request, *args, **kwargs):

        # data = {
        #     'items': request.data[0],
        # }
        print(request.data)
        items = request.data
        serializer = OrderSerializer(data=items)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)