import { useParams } from "react-router-dom";
import { imageUrl } from "../../constants/api_urls";
import { useGetAccessoriesByIdQuery } from "./accessoriesApi";
import AddToCarts from "../Cart/AddToCarts";
import AddReviews from "../Reviews/AddReviews";
import { useSelector } from "react-redux";
import ReviewLists from "../Reviews/ReviewLists";

const AccessoriesDetail = () => {
  const {id}=useParams();
  const{data,isLoading,error}=useGetAccessoriesByIdQuery(id);
  const {user}=useSelector((state)=>state.userSlice)
  console.log(data)

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>Please Try Again</h1>
  }
  return (
    <div className="flex mt-5">
      {/* <div>
        <img className="w-96" src={`${imageUrl}${data.image}`} alt="" />
      </div>
      <div className="space-y-5">
        <h1 className="font-bold text-2xl text-center">{data.title}</h1>
        <h2 className="text-center">{data.category}</h2>
        <p className="px-20 text-justify">{data.description}</p>
        <h3 className="text-center font-medium">Rs.{data.price}</h3>
      </div> */}
     {data && <AddToCarts data={data} />}
     <div>
      <AddReviews user={user} id={data?._id} />
      <hr />
      <ReviewLists reviews={data?.reviews}/>
     </div>
     </div>
    
  )
}
export default AccessoriesDetail;