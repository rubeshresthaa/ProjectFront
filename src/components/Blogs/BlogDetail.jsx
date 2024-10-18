import { useParams } from "react-router-dom";
import { useGetBlogsByIdQuery } from "./blogApi"
import { imageUrl } from "../../constants/api_urls";

const BlogDetail = () => {
  const {id}=useParams();
  const {isLoading,data,error}=useGetBlogsByIdQuery(id);
  console.log(data)

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if (error) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl text-red-600">Error fetching blog details.</h1>
        <p>Please try again later.</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center space-y-10 mt-5">
      <div>
        <img className="w-96" src={`${imageUrl}${data.image}`} alt="" />
      </div>
      <div className="space-y-5">
        <h1 className="font-bold text-2xl text-center">{data.title}</h1>
        <h2 className="text-center">By:{data.author}</h2>
        <p className="px-20 text-justify">{data.description}</p>
      </div>
    </div>
  )
}
export default BlogDetail