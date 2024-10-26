import { useParams } from "react-router-dom";
import { useGetBreedsByIdQuery } from "../../components/Breeds/breedApi";
import ProductEditForm from "./ProductEditForm";

const ProductEdit = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetBreedsByIdQuery(id); // handle possible error state
 

  if (isLoading) {
    return <h1 className="text-center font-bold text-2xl">Loading...</h1>;
  }

 

  // Check if data is defined before rendering the form
  return (
    <div>
      
        <ProductEditForm breed={data} />
     
    </div>
  );
};

export default ProductEdit;
