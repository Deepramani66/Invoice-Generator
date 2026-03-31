from rest_framework import serializers
from .models import Invoice, LineItem

class LineItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = LineItem
        exclude = ['invoice'] 


class InvoiceSerializer(serializers.ModelSerializer):
    items = LineItemSerializer(many=True)

    class Meta:
        model = Invoice
        fields = '__all__'

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        invoice = Invoice.objects.create(**validated_data)

        for item in items_data:
            LineItem.objects.create(invoice=invoice, **item)

        return invoice