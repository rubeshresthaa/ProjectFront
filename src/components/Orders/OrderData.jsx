import { useNavigate } from "react-router-dom";
import { useGetOrderByUserQuery } from "./orderApi";

const OrderData = ({ user }) => {
  const nav = useNavigate();
  const token = user?.token;

  // Call the query hook unconditionally
  const { data, isLoading, error } = useGetOrderByUserQuery(token, {
    skip: !token,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // Handle errors
  if (error) {
    console.error("Error fetching orders:", error); // Log error for debugging
    return <h1 className="text-red-500">Error fetching orders: {error.message}</h1>;
  }

  return (
    <div>
      <div className="overflow-auto">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Order ID</th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Total</th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Created At</th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"></th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map(({ totalAmount, createdAt, _id }, index) => (
                <tr key={_id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <td className="px-4 py-2">{_id}</td>
                  <td className="px-4 py-2">Rs. {totalAmount}</td>
                  <td className="px-4 py-2">{new Date(createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => nav(`/user-order/${_id}`)}
                      className="text-green-500 hover:underline"
                      aria-label={`View details for order ${_id}`} // Added accessibility label
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderData;
