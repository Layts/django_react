from django.db import models


'''
Модель для товаров
'''
class Product(models.Model):
    title = models.CharField(max_length=100)
    price = models.PositiveIntegerField()
    base_unit = models.CharField(max_length=100, choices=(
        ('шт', 'шт'), ('кг', 'кг')))
    code = models.CharField(max_length=12)



