import React from 'react';
import { Link } from 'react-router-dom';
import bookingData from '../../configs/Booking/Transport.json';

export default function Transport() {
    return (
        <div className="my-3 bg-gray-100" id="book2">
            <div className="container px-4 py-5 md:flex md:flex-row md:justify-center md:items-center bg-white shadow-lg rounded-lg overflow-hidden">
                {bookingData.map((block) => (
                    <div className="md:w-1/2" key={block.id}>
                        <div className="flex flex-col h-full">
                            <div className="md:flex md:flex-row-reverse md:items-center h-full">
                                <div className="md:w-1/2 md:order-2 flex justify-center">
                                    <img src={block.img} alt="Transport" className="object-cover w-full h-full rounded-lg shadow-md" />
                                </div>
                                <div className="md:w-1/2 md:order-1">
                                    <div className="p-4">
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{block.title}</h2>
                                        <p className="text-gray-600 mb-4">{block.description}</p>
                                        <Link to={`/destination/${block.id}`} className="bg-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                            {block.buttonText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
