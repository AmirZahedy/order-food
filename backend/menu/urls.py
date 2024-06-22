from django.urls import path

from .views import (
    CategoryListView, ItemListView, OrderPostView
)


urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='category-list'),
    # path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),

    path('items/', ItemListView.as_view(), name='item-list'),
    # path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('post/', OrderPostView.as_view(), name='post-order')
    
]