from django.shortcuts import render, get_object_or_404, redirect
from .models import Course, Student
from .forms import CourseForm, StudentForm

# Home page
def home(request):
    return render(request, 'hello/hello.html')

# List courses
def course_list(request):
    courses = Course.objects.all()
    return render(request, 'course/course_list.html', {'courses': courses})

# Course details
def course_detail(request, pk):
    course = get_object_or_404(Course, pk=pk)
    return render(request, 'course/course_detail.html', {'course': course})

# Create new course
def course_create(request):
    if request.method == "POST":
        form = CourseForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('course_list')
    else:
        form = CourseForm()
    return render(request, 'course/course_form.html', {'form': form})

# Update course
def course_update(request, pk):
    course = get_object_or_404(Course, pk=pk)
    if request.method == "POST":
        form = CourseForm(request.POST, instance=course)
        if form.is_valid():
            form.save()
            return redirect('course_list')
    else:
        form = CourseForm(instance=course)
    return render(request, 'course/course_form.html', {'form': form})

# Delete course
def course_delete(request, pk):
    course = get_object_or_404(Course, pk=pk)
    if request.method == "POST":
        course.delete()
        return redirect('course_list')
    return render(request, 'course/course_confirm_delete.html', {'course': course})

def student_list(request):
    students = Student.objects.all()
    return render(request, 'student/student_list.html', {'students': students})

def student_create(request):
    if request.method == "POST":
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('student_list')
    else:
        form = StudentForm()
    return render(request, 'student/student_form.html', {'form': form})

def student_update(request, pk):
    student = get_object_or_404(Student, pk=pk)
    if request.method == "POST":
        form = StudentForm(request.POST, instance=student)
        if form.is_valid():
            form.save()
            return redirect("student_list")
    else:
        form = StudentForm(instance=student)
    return render(request, "student/student_form.html", {"form": form})

def student_delete(request, pk):
    student = get_object_or_404(Student, pk=pk)
    if request.method == "POST":  # confirm delete
        student.delete()
        return redirect("student_list")
    return render(request, "student/student_confirm_delete.html", {"student": student})