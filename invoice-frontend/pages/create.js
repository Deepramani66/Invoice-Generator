import { useState } from "react";
import { createInvoice } from "../services/api";

export default function CreateInvoice() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  });

  const [items, setItems] = useState([
    { product_name: "", quantity: 1, price: 0 },
  ]);

  const TAX_RATE = 0.18;

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { product_name: "", quantity: 1, price: 0 }]);
  };

  // 🔥 LIVE CALCULATIONS
  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const handleSubmit = async () => {
    await createInvoice({
      customer_name: customer.name,
      customer_email: customer.email,
      items,
    });

    alert("Invoice Saved!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 grid md:grid-cols-2 gap-6">

      {/* LEFT: FORM */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Create Invoice</h2>

        {/* Customer */}
        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Customer Name"
          onChange={(e) =>
            setCustomer({ ...customer, name: e.target.value })
          }
        />

        <input
          className="border p-2 w-full mb-4 rounded"
          placeholder="Customer Email"
          onChange={(e) =>
            setCustomer({ ...customer, email: e.target.value })
          }
        />

        {/* Items */}
        <h3 className="font-semibold mb-2">Items</h3>

        {items.map((item, i) => (
          <div key={i} className="grid grid-cols-3 gap-2 mb-2">
            <input
              className="border p-2 rounded"
              placeholder="Item"
              onChange={(e) => updateItem(i, "product_name", e.target.value)}
            />
            <input
              className="border p-2 rounded"
              type="number"
              placeholder="Qty"
              onChange={(e) => updateItem(i, "quantity", +e.target.value)}
            />
            <input
              className="border p-2 rounded"
              type="number"
              placeholder="Price"
              onChange={(e) => updateItem(i, "price", +e.target.value)}
            />
          </div>
        ))}

        <button
          onClick={addItem}
          className="text-blue-500 text-sm mt-2"
        >
          + Add Item
        </button>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Save Invoice
        </button>
      </div>

      {/* RIGHT: LIVE INVOICE PREVIEW */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">INVOICE</h1>

        <div className="mb-4">
          <p className="font-semibold">Billed To:</p>
          <p>{customer.name || "Customer Name"}</p>
          <p className="text-sm text-gray-500">
            {customer.email || "email@example.com"}
          </p>
        </div>

        {/* Items Table */}
        <div>
          {items.map((item, i) => (
            <div key={i} className="flex justify-between border-b py-2">
              <span>{item.product_name || "Item"}</span>
              <span>
                {item.quantity} × ₹{item.price}
              </span>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="mt-4 text-right">
          <p>Subtotal: ₹{subtotal}</p>
          <p>Tax (18%): ₹{tax.toFixed(2)}</p>
          <h2 className="text-lg font-bold">Total: ₹{total.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}