import { useParams } from "react-router-dom";
import { useGetBreedsByIdQuery } from "./breedApi"
import AddToCart from "../Cart/AddToCart";
import AddReview from "../Reviews/AddReview";
import { useSelector } from "react-redux";
import ReviewList from "../Reviews/ReviewList";

const BreedDetail = () => {
  const {id}=useParams();
  const{data,isLoading,error}=useGetBreedsByIdQuery(id);
  const {user}=useSelector((state)=>state.userSlice)
  console.log(data)

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>Please Try Again</h1>
  }
  return (
    <div className="flex mt-5 justify-evenly">
      {/* <div>
        <img className="w-96" src={`${imageUrl}${data.image}`} alt="" />
      </div>
      <div className="space-y-5">
        <h1 className="font-bold text-2xl text-center">{data.title}</h1>
        <h2 className="text-center">{data.breeds}</h2>
        <p className="px-20 text-justify">{data.description}</p>
      </div> */}
      {data && <AddToCart product={data} />}
      <div>
        <AddReview user={user} id={data?._id}/>
        <ReviewList reviews={data?.reviews} />
      </div>
    </div>
  )
}
export default BreedDetail;