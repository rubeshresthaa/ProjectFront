import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../constants/api_urls";
import { removeCartItem, setToCarts } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomDialogBox from "../../ui/CustomDialogBox";

const CartPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const { carts } = useSelector((state) => state.cartSlice);
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const total = carts.reduce((acc, cart) => acc + cart.qty * cart.price, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 text-center mt-4">Shopping Cart</h1>
      {carts.length === 0 ? (
        <h1 className="text-center text-xl font-medium py-14">List is Empty</h1>
      ) : (
        <div>
          {carts.map((cart) => (
            <div className="max-w-5xl max-md:max-w-xl mx-auto bg-white py-4" key={cart._id}>
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="md:col-span-2 space-y-4">
                  <div className="grid grid-cols-3 items-start gap-4">
                    <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md mb-2">
                      <img src={`${imageUrl}${cart.image}`} alt={cart.title} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-base font-bold text-gray-800">{cart.title}</h3>
                      <button
                        type="button"
                        className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                        onClick={() => dispatch(removeCartItem({ _id: cart._id }))}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current inline" viewBox="0 0 24 24">
                          <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                          <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                        </svg>
                        REMOVE
                      </button>
                    </div>
                    <div className="w-24 flex flex-col space-y-5">
                      <select
                        value={cart.qty}
                        name="qty"
                        onChange={(e) => {
                          dispatch(
                            setToCarts({
                              ...cart,
                              qty: Number(e.target.value),
                            })
                          );
                        }}
                        className="py-2 bg-white shadow-lg"
                      >
                        {[...Array(cart.stock).keys()].map((c) => (
                          <option key={c + 1} value={c + 1}>
                            {c + 1}
                          </option>
                        ))}
                      </select>
                      <h4 className="text-lg max-sm:text-base font-bold text-gray-800">Rs. {cart.qty * cart.price}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-evenly mt-4">
        <h1 className="font-bold text-lg">Total</h1>
        <p className="font-bold text-lg">Rs. {total}</p>
      </div>
      <div className="flex justify-center">
        <button
        disabled={user?.isAdmin}
        onClick={() => {
          if (user && !user?.isAdmin) {
            handleOpen();
          } else {
            nav('/login');
          }
        }}
        className="mt-5 bg-orange-300 text-white py-2 px-4 rounded hover:bg-orange-500"
      >
        Place An Order
      </button>

      </div>
      
      {open && (
  <CustomDialogBox handleOpen={handleOpen} open={open} user={user} carts={carts} total={total} />
)}
    </div>
  );
};

export default CartPage;
