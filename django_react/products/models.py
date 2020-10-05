from django.db import models
from autoslug import AutoSlugField
import barcode
from barcode.writer import ImageWriter

'''
Модель для товаров
'''
class Product(models.Model):
    title = models.CharField(max_length=100)
    price = models.PositiveIntegerField()
    base_unit = models.CharField(max_length=100, choices=(
        ('шт', 'шт'), ('кг', 'кг')))
    slug = AutoSlugField(populate_from='title', unique=True)



