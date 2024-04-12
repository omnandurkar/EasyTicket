import React from 'react';
import logo from './airplane.png';

function Card(props) {
    const { img, country, place, date, price, description } = props;
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={img} className="w-full h-64 object-cover" alt="Card image cap" />
            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{country}</h1>
                <div className="flex items-center mb-4">
                    <img src={logo} className="w-6 h-6 mr-2" alt="Airplane icon" />
                    <p className="text-gray-600">{place}</p>
                </div>
                <p className="text-gray-600">{date}</p>
                <p className="text-gray-800 mt-4 mb-2 font-semibold">{description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    {price}
                </button>
            </div>
        </div>
    );
}

export default Card;
