import Link from "next/link";

export default function InvoiceCard({ invoice }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">{invoice.customer_name}</h2>
          <p className="text-gray-500 text-sm">{invoice.customer_email}</p>
        </div>

        <span className="text-blue-600 font-bold text-lg">
          ₹{invoice.total}
        </span>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs text-gray-400">
          {new Date(invoice.created_at).toLocaleDateString()}
        </span>

        <Link href={`/invoice/${invoice.id}`}>
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            View
          </button>
        </Link>
      </div>
    </div>
  );
}