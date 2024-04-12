import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Review from './views/Review/Review';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import Admin from './views/Admin/Admin';
import Destination from './views/Destination/Destination';
import TimeSlot from './views/TimeSlot/TimeSlot';
import Booking from './views/Booking/Booking';

function App() {

  const router = createBrowserRouter([
    

    {
      path : '/',
      element : <Home/>
    },

    {
      path : "/contact",
      element : <Contact/>
    },

    {
      path : "/review",
      element : <Review/>
    },

    {
      path : "*",
      element : <Home/>
    },

    {
      path : "/login",
      element : <Login/>
    },

    //dashboard

    {
      path : "/dashboard",
      element : <Dashboard/>
    },

    {
      path : "/badmin",
      element : <Admin/>
    },

    {
      path : "/destination/:id",
      element : <Destination/>
    },

    {
      path: "/timeslot",
      element: <TimeSlot/>
    },

    {
      path : "/booking",
      element : <Booking/>
    }

  ])
 

  return (
    <>
    
      <RouterProvider router = {router} />
    </>
  )
}

export default App
