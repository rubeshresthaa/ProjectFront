import { useFormik } from "formik"
import * as Yup from 'yup';
import { useRegisterUserMutation } from "./userApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const registerSchema=Yup.object({
  fullname:Yup.string().min(5).max(20).required(),
  email:Yup.string().email().required(),
  password:Yup.string().min(5).max(15).required()
})


const Register = () => {
  const[registerUser,{isLoading}]= useRegisterUserMutation()
  
  const nav=useNavigate()
   const{handleSubmit,handleChange,values,errors,touched}=useFormik({
    initialValues:{
      fullname:'',
      email:'',
      password:''
    },
    onSubmit:async(val)=>{
      try {
        const response=registerUser(val).unwrap();
        toast.success('Successfull Registered')
        nav(-1)
        
      } catch (err) {
        toast.error(err.data?.message)
        
      }

    },
    validationSchema:registerSchema
   })
  return (
    <div className="p-4 max-w-screen-lg sm:w-96 space-y-5">
      <h1 className="text-3xl text-center font-medium">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-5">
        <div className="space-y-2">
          <label className="block">Enter Your Full Name:</label>
          <input 
          type="text"
          name="fullname"
          value={values.fullname}
          onChange={handleChange}
          placeholder="Enter Your Fullname"
           className="p-3 w-96 bg-blue-gray-50 rounded-xl"
           />
           {errors.fullname && touched.fullname && <h1 className='text-red-600'>{errors.fullname}</h1>}
        </div>
        <div className="space-y-2">
          <label className="block">Enter Your Email</label>
          <input 
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
          className="p-3 w-96 bg-blue-gray-50 rounded-xl"
           />
           {errors.email && touched.email && <h1 className='text-red-600'>{errors.email}</h1>}
        </div>
        <div className="space-y-2">
          <label className="block">Enter Your Password</label>
          <input 
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="***********"
           className="p-3 w-96 bg-blue-gray-50 rounded-xl"
           />
        </div>
        {errors.password && touched.password && <h1 className='text-red-600'>{errors.password}</h1>}
        <button type='submit' className="bg-[#ffbe5c] p-4 rounded-xl w-52 hover:text-white">Sign Up</button>

      </form>
      <p className="text-blue-200 cursor-pointer underline underline-offset-8" onClick={()=>nav('/login')}>Back to Login</p>
    </div>
  )
}
export default Register