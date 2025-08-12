from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage_template, name='homepage_template'),
    path('career-center/', views.career_center_template, name='career_center_template'),
    path('aris/', views.aris_template, name='aris_template'),
    path('about/', views.about_template, name='about_template'),
]