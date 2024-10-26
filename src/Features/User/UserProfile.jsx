import { useFormik } from "formik";
import { useUpdateProfileMutation } from "../auth/userApi";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { addUser } from "../auth/userSlice";
import { toast } from "react-toastify";

const updateSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  fullname: Yup.string().required('Full name is required'),
});

const UserProfile = ({ user }) => {
  const [updateUser, { isLoading }] = useUpdateProfileMutation();
  const dispatch = useDispatch();

  const { handleChange, errors, values, touched, handleSubmit } = useFormik({
    initialValues: {
      email: user?.email,
      fullname: user?.fullname,
    },
    validationSchema: updateSchema,
    onSubmit: async (val) => {
      try {
        const newUser = { ...user, email: val.email, fullname: val.fullname };
        const response = await updateUser(newUser).unwrap();
        dispatch(addUser(newUser));
        toast.success('Successfully Updated');
      } catch (err) {
        toast.error(err.data?.message);
      }
    },
  });

  return (
    <div className="p-2 bg-white shadow-md rounded-md max-w-lg">
      <h1 className="text-2xl font-semibold mb-5 text-gray-800">Profile</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Full Name</label>
          <input
            type="text"
            name="fullname"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            onChange={handleChange}
            value={values.fullname}
            placeholder="Enter your full name"
          />
          {errors.fullname && touched.fullname && (
            <p className="text-red-600 text-sm mt-1">{errors.fullname}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            onChange={handleChange}
            value={values.email}
            placeholder="name@mail.com"
          />
          {errors.email && touched.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          className={`mt-6 w-full bg-blue-gray-800 text-white py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update'}
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
