import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function App() {
  const userName = localStorage.getItem("userName");
  const uPhoto = localStorage.getItem("userPhoto")

  const [message, setMessage] = useState('');
  const [reviews, setReviews] = useState([]);

  const loadReview = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/review`);
      setReviews(response.data.data);
      toast.success("Reviews Loaded");
    } catch (error) {
      console.error("Error loading reviews:", error);
      toast.error("Failed to load reviews");
    }
  }

  useEffect(() => {
    loadReview();
  }, []);

  const addReview = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/review`, {
        name: userName,
        message: message,
        userPhoto: uPhoto
      });
      toast.success(response.data.message);
      loadReview();
      reset();
    } catch (error) {
      console.error("Error adding review:", error);
      toast.error("Failed to add review");
    }
  }

  const reset = () => {
    setMessage('');
  }

  return (
    <div className='body '>
      <Navbar />
      <div className="container mt-5">
        <div className='max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 border'>
          <h1 className="text-center text-info-emphasis mb-4">Add Review</h1>
          <p className="mb-2">Name: <span className='font-bold '>{userName}</span></p>
          <p className="mb-2">Review: </p>
          <input
            type='text'
            placeholder='Enter Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='mb-3 p-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 w-full' />
          <div className="flex justify-center">
            <button type='button' onClick={reset} className="bg-gray-200 text-gray-700 rounded px-4 py-2 mr-4 hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Reset</button>
            <button type='button' onClick={addReview} className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Save</button>
          </div>

        </div>
      </div>

      <div className="body p-5 md:p-20">
        <h1 className="text-center pt-4 text-info-emphasis mb-4">Read what our Customers say</h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review._id} className="w-full sm:w-1/2 md:w-5/6 mx-auto hover:scale-90 duration-500">
                <ReviewCard {...review} loadReview={loadReview} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
