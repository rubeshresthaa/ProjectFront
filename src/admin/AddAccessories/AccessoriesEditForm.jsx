

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import { useUpdateAccessoriesMutation } from "../../components/Accessories/accessoriesApi";

const validTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const AccessoriesEditForm = ({acc}) => {

  const[updateAccessories,{isLoading}]=useUpdateAccessoriesMutation()
  const {user}=useSelector((state)=>state.userSlice)
  const nav=useNavigate()
  const{values, handleChange,
    handleSubmit, errors, setFieldValue, touched }=useFormik({
      initialValues: {
        title: acc.title,
        price:acc.price,
        image: null,
        description: acc.description,
        category: acc.category,
        stock: acc.stock,
      },
      onSubmit:async (val,{resetForm})=>{
        const formData = new FormData();
        formData.append("title", val.title);
        formData.append("description", val.description);
        formData.append("image", val.image);
        formData.append("category", val.category);
          formData.append("price", Number(val.price));
          formData.append("stock", Number(val.stock));
          try {
            if(val.image===null){
              await updateAccessories({
                body:formData,
                token:user.token,
                id:acc._id
              }).unwrap()
              toast.success('Successfully Edited')
              nav(-1)
            }else{
              if(validTypes.includes(val.image.type)){
                formData.append('image',val.image)
                await updateAccessories({
                   body:formData,
                token:user.token,
                id:acc._id
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
  return (
    <div >
      <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="space-y-8 ">
      <h1 className="text-center text-2xl font-bold my-5">Edit Accessories</h1>
        <div className="space-y-3">
          <label className="block">Enter Title:</label>
          <input
            type="text"
            name="title"
            value={values.title}
            placeholder="Enter Your Title"
            onChange={handleChange}
            className="p-3 bg-gray-100 rounded-lg outline-none w-96"
          />
          
        </div>
        
        <div>
          <label className="block">Select Category</label>
          <select
          onChange={(e)=>setFieldValue('category',e.target.value)}
          value={values.category}
        className="bg-gray-100 p-2 rounded-xl outline-none"
          >
           <option value="">Select Category</option>
            <option value="Bowls & Feeding">Bowls & Feeding</option>
            <option value="Clean Up">Clean Up</option>
            <option value="Collars">Collars</option>
            <option value="Dog Wear">Dog Wear</option>
            <option value="Grooming">Grooming</option>
            <option value="Toys">Toys</option>
            <option value="Utilis & Training">Utilis & Training</option>

          </select>
          
        </div>
        <div className="space-y-3">
          <label className="block">Enter Description:</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={values.description}
            className="p-3 w-96 bg-gray-100 rounded-xl overflow-scroll h-40"
          ></textarea>
          
        </div>
        <div className="space-y-3">
          <label className="block">Enter Price:</label>
          <input
            type="number"
            name="price"
            value={values.price}
            placeholder="0"
            onChange={handleChange}
            className="p-3 bg-gray-100 rounded-lg outline-none w-96"
          />
          
        </div>
        <div className="space-y-3">
          <label className="block">Enter Stock:</label>
          <input
            type="number"
            name="stock"
            value={values.stock}
            placeholder="0"
            onChange={handleChange}
            className="p-3 bg-gray-100 rounded-lg outline-none w-96"
          />
       
        </div>
        <div>
          <input
            type="file"
            name="image"
            onChange={(e) => {
              const file = e.target.files[0];
              // setFieldValue('imageReview', URL.createObjectURL(file))
              setFieldValue("image", file);
            }}
          />
          {errors.image && touched.image && (
            <h1 className="text-red-500">{errors.image}</h1>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#ffbe5c] font-medium p-3 rounded-lg hover:text-white"
        >
          Edit Accessories
        </button>
      </form>
      </div>
      
     

      <button onClick={()=>nav('/admin-profile')} className="ml-10 text-lg underline underline-offset-8 p-5">Back</button>
    </div>
  )
}
export default AccessoriesEditForm;