import React from 'react';
import './HeroSec.css';
import Img1 from "./train-LGT.gif";

// import bookingData from '../../configs/Booking/Transport.json';
import { Link } from 'react-router-dom';

export default function HeroTrain() {
    return (
        <div className='border-top bg-white  '>

            <section className="py-28">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-blue-600 font-medium">
                            Over 2000+ successful Journeys
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            Discover Your Dream Destinations Today.
                        </h2>
                        <p>
                            Embark on a journey of discovery and explore your dream destinations today.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link to="/destination/2" className="block py-2 px-4 text-center text-white font-medium bg-blue-600 duration-150 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg hover:shadow-none">
                                Book Train
                            </Link>
                            <Link to="/contact" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Contact
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src={Img1}
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-14 px-4 md:px-8">
                    <p className="text-center text-sm text-gray-700 font-semibold">Trusted by the best travelers</p>

                </div>
            </section>


        </div>
    )
}
