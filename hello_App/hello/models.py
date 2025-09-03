from django.db import models

class Course(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10, unique=True)
    def __str__(self):
        return f"{self.code} - {self.name}"

class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=100, default="default@example.com")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="students")
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
