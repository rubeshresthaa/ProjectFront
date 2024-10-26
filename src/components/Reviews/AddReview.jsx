import { useFormik } from "formik";
import { useAddReviewMutation } from "../Breeds/breedApi";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";

const AddReview = ({ user, id }) => {
  const [addReview, { isLoading }] = useAddReviewMutation();
  const commentSchema = Yup.object({
    rating: Yup.number().required("Rating is required"),
    comment: Yup.string().min(5, "Comment should be at least 5 characters").required("Comment is required"),
  });

  const { handleSubmit, values, handleChange, setFieldValue } = useFormik({
    initialValues: {
      rating: 0,
      comment: ''
    },
    onSubmit: async (val, { resetForm }) => {
      try {
         await addReview({
          body: {
            rating: val.rating,
            comment: val.comment
          },
          id,
          token: user.token
        }).unwrap();
        resetForm();
        toast.success('Review has been added');
      } catch (err) {
        toast.error(`${err.data?.message}`);
      }
    },
    validationSchema: commentSchema
  });

  const handleStarClick = (rating) => {
    setFieldValue('rating', rating);
  };

  return (
    <div>
      {!user?.isAdmin && user && (
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Add Review Here</h1>
          <form onSubmit={handleSubmit} >
            <div className="flex flex-col gap-2">
              
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={24}
                    onClick={() => handleStarClick(star)}
                    className={`cursor-pointer ${star <= values.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">Rating: {values.rating}</span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="comment" className="font-medium">Comment</label>
              <textarea
                name="comment"
                id="comment"
                onChange={handleChange}
                value={values.comment}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Write your review..."
                rows="4"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-4 py-2 text-white rounded ${isLoading ? 'bg-orange-300' : 'bg-orange-400 hover:bg-orange-600 mt-2'} transition rounded-xl`}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddReview;
