import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function AReviews() {
  const [reviews, setReviews] = React.useState([]);

  const loadReviews = async () => {
    try {
      let response = await axios.get(`${import.meta.env.VITE_API_URL}/review`);
      setReviews(response.data.data);
      toast.success(response.data.message);
    } catch (error) {
      toast.error('Error loading reviews');
    }
  };

  const deleteReview = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this review?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/review/${id}`);
      setReviews(reviews.filter(review => review._id !== id));
      toast.success('Review deleted successfully');
    } catch (error) {
      toast.error('Error deleting review');
    }
  };

  React.useEffect(() => {
    loadReviews();
  }, []);

  return (
    <div className="container mx-auto">
    <h1 className="my-4 text-2xl font-bold">All Reviews</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md border p-4">
          <div className="flex items-center mb-3">
            <img src={review.userPhoto} alt="User" className="w-12 h-12 rounded-full" />
            <div className="ml-4">
              <h6 className="font-semibold">{review.name}</h6>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <p className="text-gray-700">{review.message}</p>
          </div>
          <button
            className="mt-3 px-4 py-2 bg-red-500 text-white  rounded-md hover:bg-red-600 focus:outline-none"
            onClick={() => deleteReview(review._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>
  );
}
