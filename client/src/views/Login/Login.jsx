import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import img1 from './img3.png';
import img2 from './img2.png';
import { auth, provider } from "./config";
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    signInWithPopup(auth, provider).then(async (data) => {
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("userName", data.user.displayName);
      localStorage.setItem("userPhoto", data.user.photoURL);
      setLoggedIn(true);

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/user`, {
        email: data.user.email,
        userName: data.user.displayName,
        userPhoto: data.user.photoURL
      });

      toast.success(response.data.message);
    });
  };

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setLoggedIn(true);
    }
  }, []);

  if (loggedIn) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  return (
    <>

  <section className="text-gray-600 body-font overflow-hidden bg-gray-50 shadow-inner">
    <div className="container px-5 py-12 mx-auto flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/3 mx-auto mb-10 lg:mb-0 flex items-center justify-center">
        <img alt="ecommerce" className="lg:w-full lg:h-auto h-20 object-cover object-center rounded" src={img1} />
      </div>

      <div className="lg:w-1/2 lg:pl-5 lg:py-14  flex flex-col items-center justify-center py-4 ">
        <div className='bg-gray-200 p-10 py-20 rounded shadow-lg flex flex-col items-center justify-center'>
        <h2 className="text-gray-900 lg:text-4xl text-3xl font-extrabold title-font mb-8">Welcome to EasyTicket</h2>
        <h2 className="text-gray-900 text-lg font-extrabold title-font mb-5 opacity-70">Step Inside and Book Your Journey with Ease!</h2>
        <div className='mx-auto'>
          <button onClick={handleLogin} className="border border-blue-600 my-4 rounded-sm bg-white drop-shadow-sm flex items-center justify-center">
            <img src='https://cdn-icons-png.flaticon.com/128/300/300221.png' className='h-5 mx-3' alt='G-logo' />
            <h1 className='font-semibold text-base hover:bg-blue-700 bg-blue-600 p-2 pe-5 text-white'>Login with Google</h1>
          </button>
        </div>
        <p className="text-sm text-gray-900 font-extrabold opacity-30 mt-3">Seamless Access to Your Future: Book Your Journey Now!</p>
        </div>
      </div>
    </div>
  </section>

</>

  
  );
}

export default Login;
