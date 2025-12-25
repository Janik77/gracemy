from django.shortcuts import render


def home(request):
    return render(request, 'pages/home.html')


def projects(request):
    return render(request, 'pages/projects.html')


def project_detail(request):
    return render(request, 'pages/project-detail.html')


def contacts(request):
    return render(request, 'pages/contacts.html')
