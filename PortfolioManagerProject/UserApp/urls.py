from django.urls import path
from . import views

urlpatterns = [
    path('', views.send_the_index, name="index"),


]