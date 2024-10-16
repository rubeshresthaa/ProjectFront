import { useFormik } from "formik";
import { useAddBlogMutation } from "./blogApi"
import * as Yup from 'yup';
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const blogSchema=Yup.object({
  title:Yup.string().required(),
  author:Yup.string().required(),
  description:Yup.string().min(20).required(),
  image: Yup.mixed().required().test('fileType', 'invalid image', (e) => {
    return validTypes.includes(e.type);
  })

})



const AddBlogs = () => {
   const[addBlog, {isLoading}]=useAddBlogMutation();
   const {user}=useSelector((state)=>state.userSlice)
   console.log('User Token:', user?.token);

   const {handleChange,handleSubmit,errors,values,touched,setFieldValue} =useFormik({
    initialValues:{
      title:'',
      author:'',
      description:'',
      image:null
    },
    onSubmit:async(val,{resetForm})=>{
      const formData=new FormData();

      formData.append('title', val.title);
      formData.append('author',val.author);
      formData.append('description',val.description);
      formData.append('image',val.image);
      try {
        await addBlog({
          body:formData,
          token:user.token
        }).unwrap();
        toast.success('Blog Successfully Added')
        resetForm()
        
        
      } catch (err) {
        toast.error('Please Try Again')
        
      }

    },
    validationSchema:blogSchema
  })
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Add New Blog</h1>
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
           {errors.title && touched.title && <h1 className="text-red-500">{errors.title}</h1>}
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
           {errors.author && touched.author && <h1 className="text-red-500">{errors.author}</h1>}
        </div>
        <div className="space-y-3">
        <label className="block">Enter Description:</label>
          <textarea name="description"
          
          onChange={handleChange}
          value={values.description}
           className="p-3 w-96 bg-blue-gray-50 rounded-xl overflow-scroll h-40">
          </textarea>
           {errors.description && touched.description && <h1 className="text-red-500">{errors.description}</h1>}
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
          {errors.image && touched.image && <h1 className="text-red-500">{errors.image}</h1>}
       
        </div>
        <button type="submit" className="bg-[#ffbe5c] font-medium p-3 rounded-lg hover:text-white">Add Blog</button>
       </form>
      
    </div>
  )
}
export default AddBlogs