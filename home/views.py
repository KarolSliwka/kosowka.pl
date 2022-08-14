""" Views for Home App"""
from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib import messages


# Main home view
def home(request):
    """ A view to display homepage """
    return render(request, 'home/home.html')
