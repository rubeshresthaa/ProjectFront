import { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../constants/api_urls";
import { useGetBreedsQuery } from "./breedApi";

const Breeds = () => {
  const [filter, setFilter] = useState("");
  const nav = useNavigate();
  const { data, isLoading, error } = useGetBreedsQuery();
  
  console.log(data);

  if (isLoading) {
    return <p>Loading breeds...</p>;
  }

  if (error) {
    return <p>Failed to fetch breeds. Please try again later.</p>;
  }

  // Filter the breeds based on the selected filter
  const filteredBreeds = filter
    ? data.products.filter((breed) => breed.breeds === filter)
    : data.products;

  return (
    <div className="p-10 w-9/12 mx-auto">
      <h1 className="text-3xl font-bold text-center p-5">Breeds</h1>
      
   
      <div className="mb-5">
        <label htmlFor="filter" className="mr-2">Filter by breed type:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Breeds</option>
          <option value="Golden Retriver">Golden Retriever</option>
          <option value="Labrador">Labrador</option>
          <option value="Pit Bull">Pit Bull</option>
          <option value="Huskey">Husky</option>
          <option value="German Shephard">German Shepherd</option>
          <option value="Pug">Pug</option>
          <option value="Japanese Spitz">Japanese Spitz</option>
        </select>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-2 justify-center items-center text-center gap-5">
        {filteredBreeds.length ? (
          filteredBreeds.map((breed) => (
            <div
              key={breed._id} 
              className="flex flex-col justify-between items-center p-4 bg-white shadow-lg rounded-lg min-h-[400px]" // 
            >
              <h1 className="text-xl font-semibold mb-2">{breed.name}</h1>
              <img
                src={`${imageUrl}${breed.image}`}
                className="w-full object-contain rounded-lg h-40" // 
                alt={breed.name}
              />
              
              <p className="text-gray-600 mt-2">{breed.breeds}</p>
              <p className="text-gray-600 mt-2">{breed.description.substring(0, 100)}</p>
              <p className="text-lg font-bold mt-2">Rs.{breed.price}</p>
              <button
                className="p-2 w-24 text-sm bg-[#ff9900] rounded-2xl text-white hover:text-black outline-none"
                onClick={() => nav(`/breeds-detail/${breed._id}`)}
              >
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p>No Breeds Found</p>
        )}
      </div>
    </div>
  );
};

export default Breeds;
