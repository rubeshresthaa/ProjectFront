import { useParams } from "react-router-dom";
import { useGetAccessoriesByIdQuery } from "../../components/Accessories/accessoriesApi";
import AccessoriesEditForm from "./AccessoriesEditForm";


const AccessoriesEdit = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetAccessoriesByIdQuery(id); 
 
 

  if (isLoading) {
    return <h1 className="text-center font-bold text-2xl">Loading...</h1>;
  }

 

  return (
    <div>
      <AccessoriesEditForm acc={data} />
        
     
    </div>
  );
};

export default AccessoriesEdit;
