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
    <div className="container">
      <h1 className="my-4">All Reviews</h1>
      <div className="row">
        {reviews.map((review, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card p-3 px-4 card-wth border-info shadow">
              <div className="d-flex align-items-center">
                <img src={review.userPhoto} alt='User' className="icon-wth rounded-circle "/>
                <div className="ms-4">
                  <h6 className="fw-bold m-0">{review.name}</h6>
                </div>
              </div>
              <div className='m-3 mx-1 border inner-shadow p-2'>
                <p className="ms-2">{review.message}</p>
              </div>
              <button
                className="btn btn-danger mt-3"
                onClick={() => deleteReview(review._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
