  import { useFormik } from "formik"
  import { useLoginUserMutation } from "./userApi"
  import { useDispatch } from "react-redux"
  import { addUser } from "./userSlice"
  import { toast } from "react-toastify"
  import { useNavigate } from "react-router-dom"
  import * as Yup from 'yup';

  export const loginSchema=Yup.object({
    email:Yup.string().email().required(),
    password:Yup.string().min(5).max(15).required()
  })

  const Login = () => {
    const [loginUser,{isLoading}]=useLoginUserMutation();


    const dispatch=useDispatch()
    const nav=useNavigate()

    const {handleChange,handleSubmit,errors,touched,values}=useFormik({
      initialValues:{
        email:'',
        password:''
      },
      onSubmit:async (val)=>{
        try {
          const response=await loginUser(val).unwrap()
          dispatch(addUser(response))
          toast.success('Login Successfull')
          nav(-1)
        } catch (err) {
          toast.error(err.data?.message)
          
        }

      },
      validationSchema:loginSchema
    })
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-medium text-center mt-20">Login</h1>
          <div className="space-y-5 flex flex-col justify-center items-center p-10"> 
            <div className="space-y-2">
            <label className="block">Email:</label>
            <input
            name="email" 
            type='email'
            value={values.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
            className="bg-blue-gray-100 p-3 rounded-lg outline-none w-96"
            />
              {errors.email && touched.email && <h1 className='text-red-600'>{errors.email}</h1>}
          </div>
          <div className="space-y-2">
            <label className="block">Password:</label>
            <input
            name="password" 
            value={values.password}
            type="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
            className="bg-blue-gray-100 p-3 rounded-lg outline-none w-96"
            />
              {errors.password && touched.password && <h1 className='text-red-600'>{errors.password}</h1>}
          </div>
          <button type='submit'  className="bg-[#ff9900] p-4 rounded-xl">Sign in</button>
          </div>
        

        </form>
        </div>
    )
  }
  export default Login