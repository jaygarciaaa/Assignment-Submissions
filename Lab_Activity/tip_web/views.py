from django.shortcuts import render

def homepage_template(request):
    return render(request, 'tip_web/homepage.html')

def career_center_template(request):
    return render(request, 'tip_web/career_center.html')

def aris_template(request):
    return render(request, 'tip_web/aris.html')

def about_template(request):
    return render(request, 'tip_web/about.html')

def page404(request, exception):
    return render(request, 'tip_web/page404.html', status=404)