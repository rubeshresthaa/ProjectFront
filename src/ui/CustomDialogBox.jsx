import React from "react";
import { useDispatch } from "react-redux";
import { useAddOrderMutation } from "../components/Orders/orderApi";
import { toast } from "react-toastify";
import { clearCarts, removeCartItem } from "../components/Cart/cartSlice";
import { useNavigate } from "react-router-dom";

const CustomDialogBox = ({ open, handleOpen, user, carts, total }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  // Create updateCart with product info from carts
  const updateBreeds = carts.map((cart) => ({
    qty: cart.qty,
    product: cart._id,
  }));

  // Assuming you might have accessories, you can create them similarly if needed
  const updateAccessories = carts.map((cart) => ({
    qty: cart.qty,
    accessory: cart._id,
}));

  const [addOrder, { isLoading }] = useAddOrderMutation();

  const handleOrder = async () => {
    try {
        console.log("Preparing to add order..."); // Debugging log

        // Attempt to add the order
        const response = await addOrder({
            body: {
                totalAmount: total,
                breeds: updateBreeds,
                accessories: updateAccessories,
            },
            token: user.token,
        }).unwrap();

        console.log("Order placed successfully:", response); // Debugging log

        dispatch(clearCarts()); // Clear the cart
        toast.success("Order Placed Successfully");
        handleOpen(); 
    } catch (err) {
        console.error("Order placement error:", err); // Log the error to see its structure
        toast.error(err.data?.message || "An error occurred");
    }
};

  return (
    <div className="flex items-center justify-center min-h-screen">
      

      {open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOpen} // Close dialog on backdrop click
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dialog
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Order</h2>
            <p className="text-gray-600 mb-4">
              Are you sure you want to place the order?
            </p>

            <div className="flex justify-end space-x-3">
              <button
                onClick={handleOpen}
                className="px-4 py-2 text-gray-600 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleOrder}
                className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                Confirm
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={handleOpen}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDialogBox;
