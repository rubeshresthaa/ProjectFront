import { useFormik } from "formik"
import * as Yup from 'yup'; 

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSubmitContactMutation } from "./contactApi";

 export const contactSchema=Yup.object({
  fullname:Yup.string().min(5).max(20).required(),
  email:Yup.string().email().required(),
  subject:Yup.string().min(15).required()
})

const Contact = () => {
  const [submitContact, { isLoading }] = useSubmitContactMutation();
  console.log(submitContact)


  const dispatch=useDispatch()
  const nav=useNavigate()
   const {handleChange,handleSubmit,errors,values,touched}=useFormik({
    initialValues:{
      fullname:'',
      email:'',
      subject:''
    },
    onSubmit:async (val,{resetForm})=>{
      try {
        const response = await submitContact(val).unwrap(); // Call the mutation
        //  dispatch(submitContact(response)); // Dispatch action to save to Redux store
        toast.success('Thank You! We will reach to you soon.');
        resetForm()
        
     
        
      } catch (err) {
        toast.error('Something went wrong. Please try again.'); // Handle errors appropriately
      }

    },
    validationSchema:contactSchema
   })
  return (
    <div className="flex flex-col justify-center items-center space-y-5 mt-5">
      <h1 className="text-3xl font-medium text-center underline underline-offset-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <label className="block">Enter Your Fullname:</label>
          <input type="text"
          name="fullname"
          value={values.fullname}
          onChange={handleChange} 
          placeholder="Your Full Name..."
          className="p-3 w-96 bg-blue-gray-50 rounded-xl"/>
          {errors.fullname && touched.fullname && <h1 className='text-red-600'>{errors.fullname}</h1>}
        </div>
        <div className="space-y-4">
          <label className="block">Enter Your Email:</label>
          <input type="email"
          name="email"
          value={values.email}
          onChange={handleChange} 
          placeholder="Your Email..."
          className="p-3 w-96 bg-blue-gray-50 rounded-xl"/>
          {errors.email && touched.email && <h1 className='text-red-600'>{errors.email}</h1>}
        </div>
        <div>
          <label className="block">Subject:</label>
          <textarea name="subject"
          
          onChange={handleChange}
          value={values.subject}
           className="p-3 w-96 bg-blue-gray-50 rounded-xl overflow-scroll h-40">
          </textarea>
          {errors.subject && touched.subject && <h1 className='text-red-600'>{errors.subject}</h1>}
        </div>
        <button type="submit" className="bg-[#ffbe5c] font-medium p-3 rounded-lg hover:text-white">Submit</button>


      </form>
    </div>
  )
}
export default Contact