from rest_framework import serializers

from models import Matter


class MatterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Matter
        fields = ('id', 'date_created', 'name', 'region','billing_group', 'office', 
            'service_area', 'partner', 'desc', 'billable_hrs', 'fees_billed', 'profitability')