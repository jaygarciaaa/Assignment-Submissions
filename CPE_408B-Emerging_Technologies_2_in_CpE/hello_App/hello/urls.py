from django.urls import path
from . import views

# urlpatterns = [
#     path('', views.hello_template, name='hello_template'),
#     path('about/', views.about_template, name='about_template'),
#     path('contact/', views.contact_template, name='contact_template'),
# ]

# since we globalized or directly imported the templates here on the hello app to config/urls, we dont need this