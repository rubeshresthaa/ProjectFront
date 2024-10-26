import { useParams } from "react-router-dom"
import { useGetBlogsByIdQuery } from "./blogApi"
import BlogEditForm from "./BlogEditForm"

const BlogEdit = () => {
  const {id}= useParams()
 const{data,isLoading}= useGetBlogsByIdQuery(id)

 if (isLoading) {
  return <h1 className="text-center font-bold text-2xl">Loading...</h1>;
}

  return (
    <div>
      <BlogEditForm blog={data} />
    </div>
  )
}
export default BlogEdit