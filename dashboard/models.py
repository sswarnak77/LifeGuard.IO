# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class Client(models.Model):
    name = models.CharField(max_length=20)
    addr = models.CharField(max_length=100, null=True)
    office = models.CharField(max_length=20, null=True)
    
    def __str__(self):
        return self.name

@python_2_unicode_compatible
class Matter(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)
    name = models.CharField("matter name",max_length=50, default="UNNAMED")
    region = models.CharField(max_length=20, blank=True)
    billing_group = models.CharField("Billing group", max_length=30, blank=True)
    office = models.CharField("matter management office", max_length=20, blank=True)
    service_area = models.CharField("Service Area",max_length=30, blank=True)
    partner = models.CharField("matter management partner", max_length=30, blank=True)
    desc = models.TextField("matter description", blank=True)

    #historical data points
    billable_hrs = models.FloatField("billable hours", default=0) 
    fees_billed = models.FloatField("fees billed", default=0)
    avg_bill_rate = models.FloatField("average bill rate", default=0)

    #profitablity from model
    profitability = models.FloatField(default=0)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('date_created',)

