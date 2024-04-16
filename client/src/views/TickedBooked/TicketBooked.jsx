import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Tickets() {
    const [latestTicket, setLatestTicket] = useState(null);

    const loadTickets = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/booking`);
            if (response.data && response.data.message) {
                toast.success(response.data.message);
            }
            const ticketsData = response.data.data;
            if (ticketsData.length > 0) {
                // Setting the latest ticket
                setLatestTicket(ticketsData[ticketsData.length - 1]);
            }
        } catch (error) {
            console.error('Error loading Tickets:', error);
            toast.error('Failed to load Tickets');
        }
    };

    useEffect(() => {
        loadTickets();
    }, []);

    const handlePrint = () => {
        window.print();
    };

    const randomFarePrice = () => {
        const min = 500;
        const max = 2000;
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function randomSeatNumber() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomNumber = Math.floor(Math.random() * 40) + 1; // Generate random number between 1 and 40
        const randomLetter = letters[Math.floor(Math.random() * letters.length)]; // Generate random letter from A to Z
        return `${randomNumber}${randomLetter}`; // Combine random number and letter for seat number
    }



    return (
        <div className="container mx-auto p-5 flex flex-col">
            <h1 className="text-2xl font-bold mb-5">Congratulations! Your ticket has been booked successfully.   </h1>
            <div className="bg-white w-3/4 mx-auto shadow-md rounded p-6 mb-4 border-2 border-blue-600">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-bold text-blue-600">Railway Ticket</h1>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full">Confirmed</span>
                </div>
                <table className="w-full text-left">
                    <tbody>
                        {latestTicket && (
                            <>
                                <tr>
                                    <td className="py-1 font-semibold">Passenger Name:</td>
                                    <td className="py-1">{latestTicket.name}</td>
                                </tr>
                                <tr>
                                    <td className="py-1 font-semibold">Train Name:</td>
                                    <td className="py-1">{latestTicket.trainName}</td>
                                </tr>
                                <tr>
                                    <td className="py-1 font-semibold">From:</td>
                                    <td className="py-1">{latestTicket.from}</td>
                                </tr>
                                <tr>
                                    <td className="py-1 font-semibold">To:</td>
                                    <td className="py-1">{latestTicket.to}</td>
                                </tr>
                                <tr>
                                    <td className="py-1 font-semibold">Date:</td>
                                    <td className="py-1">{latestTicket.date}</td>
                                </tr>
                                <tr>
                                    <td className="py-1 font-semibold">Fare:</td>
                                    <td className="py-1">&#8377;{randomFarePrice()}</td>
                                </tr>
                                <tr>
                                    <td className="py-1 font-semibold">Seat Number:</td>
                                    <td className="py-1">{randomSeatNumber()}</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </div>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded"
                onClick={handlePrint}
            >
                Print Ticket
            </button>

            <button onClick={() => window.location.href = '/'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded mt-4">
                Back to Home
            </button>
        </div>
    );
}
