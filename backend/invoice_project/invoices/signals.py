from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Invoice, LineItem

TAX_RATE = 0.18

@receiver(post_save, sender=LineItem)
def update_invoice_total(sender, instance, **kwargs):
    invoice = instance.invoice
    items = invoice.items.all()

    subtotal = sum(item.get_total() for item in items)
    tax = subtotal * TAX_RATE
    total = subtotal + tax

    invoice.subtotal = subtotal
    invoice.tax = tax
    invoice.total = total
    invoice.save()