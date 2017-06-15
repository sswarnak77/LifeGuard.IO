# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from dashboard.models import Matter, Client

# Register your models here.

admin.site.register(Matter)
admin.site.register(Client)