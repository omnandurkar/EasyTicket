import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import toast from 'react-hot-toast'
import Destination from '../Destination/Destination.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Booking() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // const trainName = params.get('trainName');
  const trainName = localStorage.getItem("selectedTrainName");
  const date = params.get('date');
  const from = params.get('from');
  const to = params.get('to');

  console.log(trainName, date, from, to);

  const [payment, setPayment] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const email = localStorage.getItem("email");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/booking`, {
        name,
        phone,
        email,
        trainName,
        from,
        to,
        date
      });
      // console.log(response.data);
      // alert('New passenger added!');
      toast.success(response.data.message);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsModalOpen(false)
  };


  return (
    <>

    <div className=''>
      <Navbar />
      <div className='text-center bg-blue-500 text-white mt-5 py-3'>
        <h1 className='text-3xl font-bold'>PASSENGER DETAILS</h1>
        <div className="flex justify-center">
          <span className='mr-2'>{from} TO {to}</span>
          <span>|</span>
          <span className='ml-2'>WED, {date}</span>
        </div>
      </div>

      <hr className='border-4 border-blue-500 my-5'></hr>

      <div className='mx-3'>
        <h2 className="text-xl font-bold">{trainName}</h2>
      </div>

      <hr className='border-4 border-blue-500 my-5'></hr>

      <div className='flex justify-around'>
        <div className='text-center'>
          <h3 className="text-lg font-bold">15:30</h3>
          <p>{from}</p>
          <p>Tue, {date}</p>
        </div>

        <div className='text-center'>
          <p className="text-lg font-bold">--10h:30m--</p>
          <span className='bg-gray-800 text-white rounded-lg px-3 py-1'>SLEEPER(SL)</span>
        </div>

        <div className='text-center'>
          <h3 className="text-lg font-bold">1:30</h3>
          <p>{to}</p>
   
          <p>Wed, {date}</p>
        </div>
      </div>

      <hr className='border-4 border-blue-500 my-5'></hr>



      {!formSubmitted && (
        <div className='p-6 select-passenger container mx-auto'>
          <h2 className="text-xl font-bold mb-4">Select Passenger</h2>
          <div className="mb-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setIsModalOpen(true)}>+ Add New</button>
          </div>
          <p className="text-sm text-gray-600 mb-4">*Children under 5 years of age shall be carried free and no purchase of any ticket is required. (If no separate berth is opted.)</p>
        </div>
      )}

      <div className='container mx-auto border border-black rounded-lg p-6 w-4/5 shadow-lg '>
        {formSubmitted && (
          <div className='user-detail-card '>
            <h2 className="text-xl font-bold mb-4">Passenger Details</h2>
            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Passenger Name</label>
                <h4 className='text-lg font-extrabold'>{name}</h4>
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
                <div className="flex items-center">
                  <span className="mr-2"></span>
                  <span className='text-lg font-extrabold'>{phone}</span>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <p className="text-sm text-gray-600">Your ticket will be sent to <a href={`mailto:${email}`} className='text-blue-500'>{email}</a> and <a href = {`tel:${phone}`} className='text-blue-500'>{phone}</a></p>
          </div>
        )}



        <div className='container p-2 mt-5 pb-5'>
          <h3 className="mb-3">Travel Insurance</h3>
          <div className="mb-3">
            <p className="mb-0">Do you want to purchase travel insurance? It costs ₹0.75 per person.</p>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="insuranceCheckbox" onChange={(e) => {
            }} />
            <label className="form-check-label" htmlFor="insuranceCheckbox">
              Yes, I want to purchase travel insurance.
            </label>
          </div>

        </div>

      </div>

      <div className="flex justify-center mt-5 container mx-auto">
        <Link to="/timeslot" className='inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded border border-gray-400 mr-4'>
          Cancel
        </Link>
        <Link to="/ticket" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Proceed
        </Link>
      </div>




      <Footer />


      {/* 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 */}

      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Icon */}<img className='rounded-full' src={localStorage.getItem("userPhoto")}/>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Add Passenger
                    </h3>
                    {/* Modal Content */}
                    <div className="mt-2">
                      <form onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                          <input type="text" name="fullName" id="fullName" autoComplete="name" className="mt-1 mb-3 appearance-none block w-full border border-gray-300 rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile No.</label>
                          <input type="tel" name="phone" id="phone" autoComplete="tel" className="mt-1 mb-3 appearance-none block w-full border border-gray-300 rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="mt-4">
                          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                          <button type="button" onClick={() => setIsModalOpen(false)} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancel
                </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      )}


      



 
    </div>
    
    </>
  );
}

export default Booking;
