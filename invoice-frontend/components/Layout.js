import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <div className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">InvoicePro</h1>

        <div className="flex gap-4">
          <Link href="/">Dashboard</Link>
          <Link href="/create">Create</Link>
        </div>
      </div>

      {/* Page Content */}
      <div className="p-6 max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  );
}