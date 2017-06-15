# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import generics
from django.shortcuts import render
from dashboard.models import Matter
from dashboard.serializers import MatterSerializer

# Create your views here.
def index(request):
    return render(request, 'dashboard/dashboard.html')

class MatterList(generics.ListCreateAPIView):
    queryset = Matter.objects.all()
    serializer_class = MatterSerializer


class MatterDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Matter.objects.all()
    serializer_class = MatterSerializer