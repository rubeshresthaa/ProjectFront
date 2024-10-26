import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../constants/api_urls";
import { setToCarts } from "../Cart/cartSlice";

const AddToCart = ({ data }) => {
  const { user } = useSelector((state) => state.userSlice);
  const { carts } = useSelector((state) => state.cartSlice);
  const isExist = carts.find((cart) => cart._id === data._id);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      qty: isExist?.qty || 1,
    },
    onSubmit: (val) => {
      const newProduct = {
        ...data,
        qty: Number(val.qty),
      };
      dispatch(setToCarts(newProduct));
      nav("/cart-page");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex-row bg-gray-100 rounded-lg shadow-md">

          {/* Product Image Section */}
          <div className="lg:w-1/2 p-6 flex items-center justify-center bg-gradient-to-r from-gray-600 via-gray-900 to-gray-900">
            <img
              src={`${imageUrl}${data.image}`}
              alt={data.title}
              className="w-3/4 h-auto object-contain"
            />
          </div>

          {/* Product Info Section */}
          <div className="lg:w-1/2 p-8 bg-white">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h2>
            

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Price</h3>
              <p className="text-2xl font-bold text-gray-900">Rs. {data.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Quantity</h3>
              <select
                value={formik.values.qty}
                onChange={formik.handleChange}
                name="qty"
                className="py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none w-20 mt-2"
              >
                {[...Array(data.stock).keys()].map((c) => (
                  <option key={c + 1} value={c + 1}>
                    {c + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-4 mt-8">
              <button
               type="submit"
               disabled={user?.isAdmin} // Disable for admin users
               className="px-6 py-2 mt-4 bg-[#ffbf5f] transition ease-in duration-200 uppercase rounded-full hover:bg-[#bd8e46] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to cart
              </button>
            </div>
            <div className="mt-8 max-w-2xl px-6">
          <div className="flex gap-2">
            <h1 className="text-lg font-bold text-gray-800">Breeds:</h1>
            <h2 className="font-medium text-blue-gray-200 text-xl">{data.category}</h2>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-bold text-gray-800">Breed Description:</h3>
            <p className="text-sm text-gray-600 mt-4">{data.description}</p>
          </div>
        </div>
          </div>
          
        </div>

        
      </div>
    </form>
  );
};

export default AddToCart;
