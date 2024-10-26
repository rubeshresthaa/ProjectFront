const ReviewList = ({ reviews }) => {
  return (
    <div className="mt-5">
      {reviews.map(({ _id, comment, rating, user }) => (
        <div key={_id} className="mb-6">
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <img
              src="https://images.unsplash.com/photo-1725012858121-9b336157bea4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
              alt={`${user.fullname}'s avatar`}
              className="w-12 h-12 rounded-full object-cover"
            />

            {/* User Info and Review */}
            <div className="space-y-2">
              <h1 className="text-lg font-medium">{user.fullname}</h1>
              
              {/* Rating */}
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l3.09 6.26L22 10.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 15.14 2 10.27l6.91-1.01L12 3z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700">{comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
