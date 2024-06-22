import datetime

from django.db import models


class Category(models.Model):
    name = models.CharField('name', max_length=50)


    class Meta:
        db_table = 'categories'
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name



class Item(models.Model):
    categories = models.ForeignKey(Category, verbose_name='categories', on_delete=models.CASCADE  )

    name = models.CharField(max_length=20, unique=True)
    price = models.DecimalField(max_digits=6, decimal_places=1)
    image = models.ImageField(upload_to='items/')
    
    class Meta:
        db_table = 'items'
        verbose_name = 'Item'
        verbose_name_plural = 'Items'

    def __str__(self):
    	return self.name

class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    items = models.TextField()

    class Meta:
        db_table = 'orders'
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'

    def __str__(self):
        return self.order_id
  

