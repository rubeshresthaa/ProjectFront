
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../constants/api_urls";
import { useState } from "react";
import { useGetAccessoriesQuery } from "./accessoriesApi";


const Accessories = () => {
  const [filter, setFilter] = useState("");
  const nav = useNavigate();
  const { data, isLoading, error } = useGetAccessoriesQuery();

  if (isLoading) {
    return <p>Loading accs...</p>;
  }

  if (error) {
    return <p>Failed to fetch accs. Please try again later.</p>;
  }

 
  const filteredAcc = filter
    ? data.products.filter((acc) => acc.category === filter)
    : data.products;

  return (
    <div className="p-10 w-9/12 mx-auto">
      <h1 className="text-3xl font-bold text-center p-5">Accessories</h1>
      
   
      <div className="mb-5">
        <label htmlFor="filter" className="mr-2">Filter by Accessories:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Accessories</option>
          <option value="">Select Category</option>
            <option value="Bowls & Feeding">Bowls & Feeding</option>
            <option value="Clean Up">Clean Up</option>
            <option value="Collars">Collars</option>
            <option value="Dog Wear">Dog Wear</option>
            <option value="Grooming">Grooming</option>
            <option value="Toys">Toys</option>
            <option value="Utilis & Training">Utilis & Training</option>
        </select>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-2 justify-center items-center text-center gap-5">
        {filteredAcc.length ? (
          filteredAcc.map((acc) => (
            <div
              key={acc._id} 
              className="flex flex-col justify-between items-center p-4 bg-white shadow-lg rounded-lg min-h-[400px]" // 
            >
              
              <img
                src={`${imageUrl}${acc.image}`}
                className="w-full object-contain rounded-lg h-40" // 
                alt={acc.name}
              />
              <h1 className="text-xl font-semibold mb-2">{acc.title}</h1>
              <p className="text-gray-600 mt-2">{acc.description.substring(0, 100)}</p>
              <p className="text-lg font-bold mt-2">{acc.category}</p>
              <p className="text-lg font-bold mt-2">Rs.{acc.price}</p>
              <button
                className="p-2 w-24 text-sm bg-[#ff9900] rounded-2xl text-white hover:text-black outline-none"
                onClick={() => nav(`/accessories-detail/${acc._id}`)}
              >
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p>No Accessories Found</p>
        )}
      </div>
    </div>
  );
};

export default Accessories;
