import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getInvoice } from "../../services/api";

export default function InvoiceDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    if (id) {
      getInvoice(id).then((res) => setInvoice(res.data));
    }
  }, [id]);

  if (!invoice) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow">
      {" "}
      <h1 className="text-xl font-bold">{invoice.customer_name}</h1>
      <p className="text-gray-500">{invoice.customer_email}</p>
      <div className="mt-4">
        {invoice.items.map((item) => (
          <div key={item.id} className="flex justify-between border-b py-2">
            <span>{item.product_name}</span>
            <span>
              {item.quantity} × ₹{item.price}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <p>Subtotal: ₹{invoice.subtotal}</p>
        <p>Tax: ₹{invoice.tax}</p>
        <h2 className="text-lg font-bold">Total: ₹{invoice.total}</h2>
      </div>
    </div>
  );
}
