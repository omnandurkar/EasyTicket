import React from 'react';
import RightArrow from './right-arrow.png';

const TrainDetails = (props) => {
    const { trainName, runsOn, departureStation, departureTime, departureDate, arrivalStation, arrivalTime, arrivalDate } = props;

    return (
        <div className='px-10'>
        <div className="container mx-auto px-4 py-6 bg-white shadow-lg rounded-lg border my-5">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">{trainName}</h2>
                    <p className="text-sm text-gray-600">Runs on: {runsOn}</p>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Book Train</button>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col items-start">
                    <p className="text-sm text-gray-700">{departureStation}</p>
                    <p className="text-lg font-semibold text-gray-800">{departureTime}</p>
                    <p className="text-sm text-gray-600">{departureDate}</p>
                </div>
                <img src={RightArrow} alt="Right Arrow" className="w-6 h-6" />
                <div className="flex flex-col items-end">
                    <p className="text-sm text-gray-700">{arrivalStation}</p>
                    <p className="text-lg font-semibold text-gray-800">{arrivalTime}</p>
                    <p className="text-sm text-gray-600">{arrivalDate}</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default TrainDetails;
