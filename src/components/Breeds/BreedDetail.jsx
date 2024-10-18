import { useParams } from "react-router-dom";
import { useGetBreedsByIdQuery } from "./breedApi"
import { imageUrl } from "../../constants/api_urls";

const BreedDetail = () => {
  const {id}=useParams();
  const{data,isLoading,error}=useGetBreedsByIdQuery(id);
  console.log(data)

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>Please Try Again</h1>
  }
  return (
    <div className="flex flex-col justify-center items-center space-y-10 mt-5">
      <div>
        <img className="w-96" src={`${imageUrl}${data.image}`} alt="" />
      </div>
      <div className="space-y-5">
        <h1 className="font-bold text-2xl text-center">{data.title}</h1>
        <h2 className="text-center">{data.breeds}</h2>
        <p className="px-20 text-justify">{data.description}</p>
      </div>
    </div>
  )
}
export default BreedDetail;