import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookingForm(props) {
  const { id } = props;
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const bookTrain = async () => {
    console.log("Attempting to book train ticket...");
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/book-train-ticket`, {
        from: from,
        to: to,
        date: date
      });
      console.log(response.data);
      alert(response.data.message);
      setFrom('');
      setTo('');
      setDate('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const bookPlane = async () => {
  //   console.log("Attempting to book plane ticket...");
  //   try {
  //     const response = await axios.post(`${import.meta.env.VITE_API_URL}/book-plane-ticket`, {
  //       from: from,
  //       to: to,
  //       date: date
  //     });
  //     console.log(response.data);
  //     alert(response.data.message);
  //     setFrom('');
  //     setTo('');
  //     setDate('');
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const bookTicket = () => {
    const userEmail = localStorage.getItem('email');
    if (userEmail) {
      console.log("Received id:", id);
      if (id === 1) {
        console.log("Booking plane ticket...");
        
      } else if (id === 2) {
        console.log("Booking train ticket...");
        bookTrain();
      } else {
        console.error('Invalid id');
      }
    } else {
      console.log("User not signed in. Redirecting to sign-in page...");
      window.location.href = '/login'; 
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl text-center text-gray-800 font-semibold mb-6">Destination Input</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="fromInput" className="block text-gray-700 font-medium">From:</label>
            <input type="text" id="fromInput" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter origin" value={from} onChange={(e) => setFrom(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="toInput" className="block text-gray-700 font-medium">To:</label>
            <input type="text" id="toInput" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter destination" value={to} onChange={(e) => setTo(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="dateInput" className="block text-gray-700 font-medium">Date:</label>
            <input type="date" id="dateInput" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="text-center">
            <Link to="/timeslot">
            <button type="button" className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700" onClick={bookTicket}>Search</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
