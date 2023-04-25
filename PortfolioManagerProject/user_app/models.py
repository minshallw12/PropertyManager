from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class App_User(AbstractUser):
    email = models.EmailField(blank=False, null=False, unique=True, max_length=254)
    name = models.CharField(null = False, blank= False, max_length=50)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.name} | {self.email}"
    
class Managers (models.Model):
    company = models.CharField(blank=False, null=False, unique=True, max_length=254)
    phone = models.CharField(max_length=20)
    email = models.EmailField(max_length=254)
    office_address = models.CharField(max_length=254, default='unknown')

    def __str__(self) -> str:
        return f"{self.company} | Dunder"

class Addresses(models.Model):
    address = models.CharField(blank=False, null=False, unique=True, max_length=254)
    city = models.CharField(blank=False, null=False, max_length=50)
    state = models.CharField(max_length=50)
    square_feet = models.BigIntegerField()
    purchase_cost = models.BigIntegerField()
    current_income = models.BigIntegerField()
    current_upkeep = models.BigIntegerField()
    portfolio = models.ForeignKey(App_User, on_delete=models.CASCADE, null=True)
    manager = models.ForeignKey(Managers, on_delete=models.CASCADE, null=True)

    def __str__(self) -> str:
        return f"{self.address} | {self.city}"
    
