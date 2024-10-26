
import { useUpdateBreedsMutation } from "../../components/Breeds/breedApi";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { breedsSchema } from "../AddProducts";
import { useSelector } from "react-redux";

const validTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const ProductEditForm = ({breed}) => {

  const[updateproduct,{isLoading}]=useUpdateBreedsMutation()
  const {user}=useSelector((state)=>state.userSlice)
  const nav=useNavigate()
  const{values, handleChange,
    handleSubmit, errors, setFieldValue, touched }=useFormik({
      initialValues: {
        title: breed.title,
        price: breed.price,
        breeds: breed.breeds,
        image: null,
        description: breed.description,
        category: breed.category,
        stock: breed.stock,
      },
      onSubmit:async (val,{resetForm})=>{
        const formData = new FormData();

        formData.append("title", val.title);
        formData.append("breeds", val.breeds);
        formData.append("description", val.description);
        formData.append("image", val.image);
        formData.append("category", val.category);
          formData.append("price", Number(val.price));
          formData.append("stock", Number(val.stock));
          try {
            if(val.image===null){
              await updateproduct({
                body:formData,
                token:user.token,
                id:breed._id
              }).unwrap()
              toast.success('Successfully Edited')
              nav(-1)
            }else{
              if(validTypes.includes(val.image.type)){
                formData.append('image',val.image)
                await updateproduct({
                   body:formData,
                token:user.token,
                id:breed._id
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
      validationSchema:breedsSchema
    })
  return (
    <div >
      <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="space-y-8 ">
      <h1 className="text-center text-2xl font-bold my-5">Edit Breeds</h1>
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
          {errors.title && touched.title && (
            <h1 className="text-red-500">{errors.title}</h1>
          )}
        </div>
        <div className="space-y-3">
          <label className="block">Select Breeds:</label>
          <select
            onChange={(e) => setFieldValue("breeds", e.target.value)}
            className="bg-gray-100 p-2 rounded-xl outline-none"
            value={values.breeds}
          >
            <option value="">Select a Breed</option>
            <option value="Golden Retriver">Golden Retreiver</option>
            <option value="Labrador">Labrador</option>
            <option value="Pit Bull">PitBull</option>
            <option value="Huskey">Huskey</option>
            <option value="German Shephard">German Shepard</option>
            <option value="Pug">Pug</option>
            <option value="japaneseSpitz">Japanese Spitz</option>
          </select>
          {errors.breeds && touched.breeds &&
            <h1 className="text-pink-700">{errors.breeds}</h1>
          }
        </div>
        <div>
          <label className="block">Select Category</label>
          <select
          onChange={(e)=>setFieldValue('category',e.target.value)}
          value={values.category}
          className="bg-gray-100 p-2 rounded-xl outline-none"
          >
            <option value="">Select Category</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>

          </select>
          {errors.category && touched.category && <h1 h1 className="text-pink-700">{errors.category}</h1>}
        </div>
        <div className="space-y-3">
          <label className="block">Enter Description:</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={values.description}
            className="p-3 w-96 bg-gray-100 rounded-xl overflow-scroll h-40"
          ></textarea>
          {errors.description && touched.description && (
            <h1 className="text-red-500">{errors.description}</h1>
          )}
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
          {errors.price && touched.price && 
            <h1 className="text-red-500">{errors.price}</h1>
          }
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
          {errors.stock && touched.stock &&
            <h1 className="text-red-500">{errors.stock}</h1>
          }
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
          Edit Breeds
        </button>
      </form>
      </div>
      
     

      <button onClick={()=>nav('/admin-profile')} className="ml-10 text-lg underline underline-offset-8 p-5">Back</button>
    </div>
  )
}
export default ProductEditForm