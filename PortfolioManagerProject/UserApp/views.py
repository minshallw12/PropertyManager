from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def sign_in(request):
    return HttpResponse('This is the sign in page.')

def send_the_index(request):
    the_index = open('static/index.html')
    return HttpResponse(the_index)