from rest_framework import serializers

from .models import Item, Category, Order

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'



class ItemSerializer(serializers.HyperlinkedModelSerializer):
    categories = CategorySerializer()

    class Meta:
        model = Item
        fields = ('id', 'name', 'price', 'categories', 'image')

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
