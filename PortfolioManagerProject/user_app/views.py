from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
import requests
from .models import * 
from django.core.serializers import serialize


import json

# Create your views here.
@api_view(["POST"])
def user_sign_up(request):
    email = request.data['email']
    password = request.data['password']
    name = request.data['name']
    super_user = False
    staff = False
    if 'super' in request.data:
        super_user = request.data['super']
    if 'staff' in request.data:
        staff = request.data['staff']
    try:
        # creates new user
        new_user = App_User.objects.create_user(username = email, email = email, name = name, password = password, is_superuser = super_user, is_staff = staff)
        new_user.save()
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})
    
@api_view(["POST"])
def firstAPIcall(request):
    amount = request.data['amount']
    term = request.data['term']
    rate = request.data['rate']
    endpoint = f"https://www.commercialloandirect.com/monthlyPaymentAPI.php?pv={amount}&rate={rate}&nperiod={term}&io=0&pf=12&cf=1&pt=0&mode=json"
    print(amount,term, rate)
    print(endpoint)
    response = requests.get(endpoint)
    print(response)
    return HttpResponse(response)


@api_view(["POST"])
def user_log_in(request):

    email = request.data['email']
    password = request.data['password']
    user = authenticate(username = email , password = password)
    if user is not None and user.is_active:
        try:
            # Creates SessionID
            login(request._request, user)
            print(user)
            return JsonResponse({'email': user.email, 'name':user.name})
        except Exception as event:
            print(event)
            return JsonResponse({'user': None})
    return JsonResponse({'user': None})


@api_view(["GET"])
def curr_user(request):

    if request.user.is_authenticated:
        #                    format       query                     options
        user_info = serialize("json",  [request.user], fields = ['name', 'email'])
        user_info_workable = json.loads(user_info)
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({"user":None})
    
@api_view(['GET'])
def curr_flag(request):
    if request.user.is_authenticated:
        return JsonResponse({'flag': True})
    else:
        return JsonResponse({'flag': False})


@api_view(['POST'])
def user_log_out(request):
    try:
        # Removes SessionID
        logout(request)
        return JsonResponse({"logout":True})
    except Exception as e:
        print(e)
        return JsonResponse({"logout":False})

def send_the_index(request):
    the_index = open('static/index.html')
    return HttpResponse(the_index)

@api_view(['POST'])
def addManager(request):
    company = request.data['company']
    phone = request.data['phone']
    email = request.data['email']
    office_address = request.data['address']

    try:
        # creates new user
        new_manager = Managers.objects.create(company = company, phone = phone, email = email, office_address = office_address)
        new_manager.save()
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})
    
@api_view(['GET'])    
def getManagers(request):
    print(request, 'getManagers')
    try:
        managers = list(Managers.objects.all().values())
        return JsonResponse({'managers': managers})
    except Exception as e:
        print(e)
        return JsonResponse({'managers':[]})

@api_view(['POST'])
def addProperty(request):
    print(request.data)
    street = request.data['street']
    city = request.data['city']
    state = request.data['state']
    square_feet = request.data['square_feet']
    purchase_cost = request.data['purchase_cost']
    current_income = request.data['current_income']
    current_upkeep = request.data['current_upkeep']
    manager = request.data['manager']

    try:
        # creates new property in the database
        new_property = Addresses.objects.create(
                address = street, 
                city = city, 
                state = state, 
                square_feet = square_feet,
                purchase_cost = purchase_cost,
                current_income = current_income, 
                current_upkeep = current_upkeep,
                manager_id = manager
            )
        new_property.save()
        return JsonResponse({"success":True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})