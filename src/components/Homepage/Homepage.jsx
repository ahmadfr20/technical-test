import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";

const Homepage = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransaction = JSON.parse(localStorage.getItem("transaction"));
    if (storedTransaction) {
      const formattedTransactions = Object.keys(storedTransaction).map((key) => ({
        order_id: storedTransaction[key].detail.order_id,
        product_name: storedTransaction[key].product.name,
        payment_method: storedTransaction[key].payment.method,
        amount: storedTransaction[key].payment.amount,
        status: storedTransaction[key].detail.transaction_status,
      }));
      setTransactions(formattedTransactions);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("transaction");
    navigate("/login");
  };

  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
    XLSX.writeFile(workbook, "transactions.csv");
  };

  const exportToXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
    XLSX.writeFile(workbook, "transactions.xlsx");
  };

  // Definisi kolom DataTable
  const columns = [
    { name: "Order ID", selector: (row) => row.order_id, sortable: true },
    { name: "Product Name", selector: (row) => row.product_name, sortable: true },
    { name: "Payment Method", selector: (row) => row.payment_method, sortable: true },
    { name: "Amount", selector: (row) => row.amount, sortable: true },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <span className={row.status === "refunded" ? "text-red-500" : "text-green-600"}>
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold text-black mb-4">Homepage</h1>

      {transactions.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3">Transaction Details</h2>

          {/* DataTable */}
          <DataTable
            columns={columns}
            data={transactions}
            pagination
            highlightOnHover
            responsive
            defaultSortField="order_id"
          />

          {/* Tombol Ekspor */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={exportToCSV}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Export CSV
            </button>
            <button
              onClick={exportToXLSX}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Export XLSX
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">No transaction data available.</p>
      )}

      {/* Tombol Logout */}
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Homepage;
