import { Link } from "react-router-dom";
import { useGetBreedsQuery } from "../components/Breeds/breedApi";
import { imageUrl } from "../constants/api_urls";

const Products = () => {
  const { isLoading, data } = useGetBreedsQuery();

  const TABLE_HEAD = ["Image", "Title", "CreatedAt", "Edit", "Delete"];

  if (isLoading) {
    return <h1 className="text-center text-xl font-semibold text-gray-700 py-4">Loading...</h1>;
  }

  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Breeds</h2>
      </div>

      <div className="overflow-auto rounded-lg">
        <table className="w-full table-auto border-collapse text-left">
          <thead className="bg-gray-200">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="p-4 text-gray-700 font-medium border-b border-gray-300"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.products.map(({ title, image, createdAt, _id }, index) => (
              <tr key={_id} className="hover:bg-gray-50 transition">
                <td className="p-4 border-b border-gray-300">
                  <img
                    src={`${imageUrl}${image}`}
                    alt={title}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </td>
                <td className="p-4 border-b border-gray-300 text-gray-800">{title}</td>
                <td className="p-4 border-b border-gray-300 text-gray-600">{createdAt}</td>
                <td className="p-4 border-b border-gray-300">
                  <Link to={`/breeds-edit/${_id}`}>
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-400 transition text-sm">
                      Edit
                    </button>
                  </Link>
                </td>
                <td className="p-4 border-b border-gray-300">
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-400 transition text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
