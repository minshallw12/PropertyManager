from django.urls import path
from . import views

urlpatterns = [
    path('', views.send_the_index, name='index'),
    path('signup/', views.user_sign_up, name='signup'),
    path('calculator/', views.firstAPIcall, name='calculator'),
    path('login/', views.user_log_in, name= 'signin'),
    path('curruser/', views.curr_user, name= 'curruser'),
    path('currflag/', views.curr_flag, name= 'currflag'),
    path('logout/', views.user_log_out, name= 'signout'),
    path('addmanager/', views.addManager, name='manager'),
    path('managers/', views.getManagers, name="managers"),
    path('addproperty/', views.addProperty, name='property'),
    path('properties/', views.getProperties, name='property'),
    path('manager/<int:id>', views.getManagerDetails, name='manager_details')
]