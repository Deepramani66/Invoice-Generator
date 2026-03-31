import { useEffect, useState } from "react";
import { getInvoices } from "../services/api";
import InvoiceCard from "../components/InvoiceCard";
import Link from "next/link";

export default function Home() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices().then((res) => setInvoices(res.data));
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <Link href="/create">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">
            + New Invoice
          </button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {invoices.map((inv) => (
          <InvoiceCard key={inv.id} invoice={inv} />
        ))}
      </div>
    </div>
  );
}