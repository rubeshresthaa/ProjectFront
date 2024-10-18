
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../constants/api_urls";
import { useGetBlogsQuery } from "./blogApi";

const Blogs = () => {
  const nav=useNavigate();
  const { data: blogs, isLoading } = useGetBlogsQuery();


  // if (isLoading) {
  //   return <h1>Loading....</h1>;
  // }
  

  return (
    <div>
      {/* <h1 className="text-2xl font-bold my-5 text-center">Blogs</h1> */}
      <div className="space-y-4 grid grid-cols-4 p-5 gap-5">
        {blogs?.length ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="rounded overflow-hidden shadow-lg"
              onClick={()=>nav(`/blog-detail/${blog._id}`)}
            > 
            
              <img
                className="w-full h-48 object-cover"
                src={`${imageUrl}${blog.image}`} 
                alt="Blog"
              />
             
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{blog.title}</div>
                <div className="font-bold text-xl mb-2">{blog.author}</div>
                <p className="text-gray-700 text-base text-justify hyphens-auto">
                  {blog.description.substring(0, 100)}
                </p>
              </div>
              
            </div>
          ))
        ) : (
          <p className="text-center text-2xl my-5">No Blogs Found</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
