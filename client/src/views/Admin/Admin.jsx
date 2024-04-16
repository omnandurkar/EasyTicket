import React, { useState } from 'react';
import AUsers from './components/AUsers';
import ABookings from './components/ABookings';
import AContactUs from './components/AContactUs';
import AReviews from './components/AReviews';
import { Link } from 'react-router-dom';

export default function Admin() {
  const [activeComponent, setActiveComponent] = useState('Dashboard'); // Initially set to Dashboard

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName);
  };

  let componentToRender;

  switch (activeComponent) {
    case 'Users':
      componentToRender = <AUsers />;
      break;
    case 'Bookings':
      componentToRender = <ABookings />;
      break;
    case 'Contact Requests':
      componentToRender = <AContactUs />;
      break;
    case 'Reviews':
      componentToRender = <AReviews />;
      break;
    default:
      componentToRender = (
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
          <header>
            <p className="mb-2 text-sm font-semibold text-blue-600">Welcome Admin Om 💙</p>
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">Admin Page : Control all Insights of Booking</h1>
            <p className="mt-2 text-lg text-gray-800">Surf through all the insights </p>
            <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <Link className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none" to="/">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Go to HomePage
              </Link>
            </div>
          </header>
        </div>
      );
  }

  return (
    <>
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
        {/* Sidebar toggle button */}
      </div>
      
      {/* Sidebar */}
      <div id="application-sidebar-dark" className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-800 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
        <div className="px-6">
          {/* Brand logo */}
          <a className="flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#" aria-label="Brand">Booking Admin Page</a>
        </div>
      
        {/* Sidebar navigation */}
        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul className="space-y-1.5">
            <li>
              {/* Dashboard button */}
              <button
                className={`w-full flex items-center gap-x-3 py-2 px-2.5 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 ${activeComponent === 'Dashboard' ? 'bg-blue-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white-300'}`}
                onClick={() => handleComponentClick('Dashboard')}
              >
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Dashboard
              </button>
            </li>
            <li>
              {/* Users button */}
              <button
                className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg focus:outline-none focus:ring-1 focus:blue-gray-600 ${activeComponent === 'Users' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white-300'}`}
                onClick={() => handleComponentClick('Users')}
              >
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Users
              </button>
            </li>
            <li>
              {/* Bookings button */}
              <button
                className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 ${activeComponent === 'Bookings' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white-300'}`}
                onClick={() => handleComponentClick('Bookings')}
              >
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                Bookings
              </button>
            </li>
            <li>
              {/* Contact Requests button */}
              <button
                className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 ${activeComponent === 'Contact Requests' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white-300'}`}
                onClick={() => handleComponentClick('Contact Requests')}
              >
                <svg className="flex-shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
                Contact Requests
              </button>
            </li>
            <li>
              {/* Reviews button */}
              <button
                className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 ${activeComponent === 'Reviews' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white-300'}`}
                onClick={() => handleComponentClick('Reviews')}
              >
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                Review
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="lg:pl-64 pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        {componentToRender}
      </div>
    </>
  );
}
