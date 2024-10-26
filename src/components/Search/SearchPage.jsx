import { useNavigate, useParams } from "react-router-dom";
import { useGetAccessoriesQuery } from "../Accessories/accessoriesApi";
import { useGetBreedsQuery } from "../Breeds/breedApi";
import { imageUrl } from "../../constants/api_urls";
import { TbFileDescription } from "react-icons/tb";

const SearchPage = () => {
  const { query } = useParams(); // Get the search query from the URL
  const nav = useNavigate();
  
  // Fetch breeds and accessories based on the search query
  const { data: breeds, isLoading: isBreedsLoading } = useGetBreedsQuery({ search: query });
  const { data: accessories, isLoading: isAccessoriesLoading } = useGetAccessoriesQuery({ search: query });

  // Check loading state
  if (isBreedsLoading || isAccessoriesLoading) {
    return <h1>Loading.....</h1>;
  }

  // Prepare product lists
  const breedList = breeds?.products || [];
  const accList = accessories?.products || [];

  return (
    <div>
      {/* Display Breeds */}
      {breedList.length > 0 && (
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {breedList.map(({ _id, title, description, image }) => {
            return (
              <div key={_id} className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={`${imageUrl}${image}`} alt={title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  <p className="text-gray-700 text-base">{description}</p>
                  <TbFileDescription className="text-2xl mt-2" />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Display Accessories */}
      {accList.length > 0 && (
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {accList.map(({ _id, title, description, image }) => {
            return (
              <div key={_id} className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={`${imageUrl}${image}`} alt={title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  <p className="text-gray-700 text-base">{description}</p>
                  <TbFileDescription className="text-2xl mt-2" />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* No products found message */}
      {breedList.length === 0 && accList.length === 0 && (
        <p>No products found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchPage;
