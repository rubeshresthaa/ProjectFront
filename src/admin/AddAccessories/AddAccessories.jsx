import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useAddAccessoriesMutation } from "../../components/Accessories/accessoriesApi";

export const validTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const accessoriesSchema = Yup.object({
  title: Yup.string().required(),
  price: Yup.number().required(),
  description: Yup.string().min(20).required(),
  image: Yup.mixed()
    .required()
    .test("fileType", "invalid image", (e) => {
      return validTypes.includes(e.type);
    }),
  category: Yup.string().required(),
  stock: Yup.number().required(),
});

const AddAccessories = () => {
  const[addAccessories,{isLoading}]=useAddAccessoriesMutation();
  
  const { user } = useSelector((state) => state.userSlice);

  const { handleChange, handleSubmit, errors, values, touched, setFieldValue } =
    useFormik({
      initialValues: {
        title: "",
        price: "",
        image: null,
        description: "",
        category: "",
        stock: "",
      },
      onSubmit: async (val, { resetForm }) => {
        const formData = new FormData();

        formData.append("title", val.title);
        formData.append("description", val.description);
        formData.append("image", val.image);
        formData.append("category", val.category);
          formData.append("price", Number(val.price));
          formData.append("stock", Number(val.stock));
        try {
          await addAccessories({
            body: formData,
            token: user.token,
          }).unwrap();
          toast.success("Breeds Successfully Added");
          resetForm();
        } catch (err) {
          toast.error("Please Try Again");
        }
      },
      validationSchema: accessoriesSchema,
    });
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 py-2">Add New Accessories</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
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
          Add Accessories
        </button>
      </form>
    </div>
  );
};
export default AddAccessories;
