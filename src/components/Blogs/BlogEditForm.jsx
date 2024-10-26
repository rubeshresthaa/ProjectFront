import {  useSelector } from "react-redux";
import { useUpdateBlogMutation } from "./blogApi"
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { validTypes } from "./AddBlogs";


const BlogEditForm = ({blog}) => {
  const [updateBlog,{isLoading}]=useUpdateBlogMutation();
  const {user}=useSelector((state)=>state.userSlice);

  const nav=useNavigate();
  const{handleSubmit,handleChange,values,setFieldValue}=useFormik({
    initialValues:{
      title:blog.title,
      author:blog.author,
      description:blog.description,
      image:null
    },
    onSubmit:async (val,{resetForm})=>{
      const formData=new FormData();

      formData.append('title', val.title);
      formData.append('author',val.author);
      formData.append('description',val.description);
      formData.append('image',val.image);

      try {
        if(val.image===null){
          await updateBlog({
            body:formData,
            token:user.token,
            id:blog._id
          }).unwrap();
          toast.success('Successfully edited')
          nav(-1)
        }else{
          if(validTypes.includes(val.image.type)){
            formData.append('image',val.image)
            await updateBlog({
              body:formData,  
              token:user.token,
              id:blog._id
            }).unwrap();
            toast.success('Successfully Edited')

          }else{
            toast.error('Please Provide Image')
          }
        }
        
      } catch (err) {
        toast.error(`${err.data?.message}`);
      }

    },
   

  })


  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <div className="flex flex-col justify-center items-center">
    <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
     <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-3">
        <label className="block">Enter Title:</label>
        <input 
        type='text'
        name='title'
        value={values.title}
        placeholder="Enter Your Title"
        onChange={handleChange}
        className="p-3 bg-blue-gray-50 rounded-lg outline-none w-96"
         />
         
      </div>
      <div className="space-y-3">
        <label className="block">Enter Author:</label>
        <input 
        type='text'
        name='author'
        value={values.author}
        placeholder="Enter Your Author"
        onChange={handleChange}
        className="p-3 bg-blue-gray-50 rounded-lg outline-none w-96"
         />
         
      </div>
      <div className="space-y-3">
      <label className="block">Enter Description:</label>
        <textarea name="description"
        
        onChange={handleChange}
        value={values.description}
         className="p-3 w-96 bg-blue-gray-50 rounded-xl overflow-scroll h-40">
        </textarea>
         
      </div>
      <div>
        <input 
        type="file"
        name='image'
        onChange={(e) => {
          const file = e.target.files[0];
          // setFieldValue('imageReview', URL.createObjectURL(file))
          setFieldValue('image', file);
        }}
        />
        
     
      </div>
      <button type="submit" className="bg-[#ffbe5c] font-medium p-3 rounded-lg hover:text-white">Edit Blog</button>
     </form>
    
  </div>
  )
}
export default BlogEditForm