
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../constants/api_urls";
import { useGetBlogsQuery, useRemoveBlogByIdMutation } from "./blogApi";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

const Blogs = () => {
  const nav=useNavigate();
  const { data: blogs, isLoading } = useGetBlogsQuery();
  const [removeBlogById]=useRemoveBlogByIdMutation();
  const {user}=useSelector((state)=>state.userSlice)
  const dispatch=useDispatch()


  // if (isLoading) {
  //   return <h1>Loading....</h1>;
  // }
  const handleRemove = async (blogId) => {
    try {
      await removeBlogById({ id: blogId }).unwrap(); 
      toast.success("Blog removed successfully");
    } catch (error) {
      toast.error("Failed to remove blog: " + error.message);
    }
  };

  return (
    <div>
      
      <div className="space-y-4 grid grid-cols-4 p-5 gap-5">
        {blogs?.length  ? (
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
                {user?.isAdmin && (
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nav(`/blog-edit/${blog._id}`);
                      }}
                      className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                    <button
                         onClick={(e) => {
                          e.stopPropagation();
                          handleRemove(blog._id);
                        }}
                      className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded"
                    >
                      Remove
                    </button>
                  </div>
                )}

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
