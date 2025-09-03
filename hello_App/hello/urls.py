from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),   # homepage
    path("course_list/", views.course_list, name="course_list"),
    path("course_detail/<int:pk>/", views.course_detail, name="course_detail"),
    path("course_list/create/", views.course_create, name="course_create"),
    path("course_list/<int:pk>/edit/", views.course_update, name="course_update"),
    path("course_list/<int:pk>/delete/", views.course_delete, name="course_delete"),
    path("students/", views.student_list, name="student_list"),
    path("students/create/", views.student_create, name="student_create"),
    path("students/<int:pk>/edit/", views.student_update, name="student_update"),
    path("students/<int:pk>/delete/", views.student_delete, name="student_delete"),
]
