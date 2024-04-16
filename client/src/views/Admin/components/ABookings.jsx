import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ABookings() {
    const [bookings, setBookings] = useState([]);

    const loadBookings = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/booking`);
            if (response.data && response.data.message) {
                toast.success(response.data.message);
            }
            // const sortedBookings = response.data.data.sort((a, b) => {
            //     return a.email.localeCompare(b.email); 
            // });
            // setBookings(sortedBookings);
            setBookings(response.data.data);
        } catch (error) {
            console.error('Error loading bookings:', error);
            toast.error('Failed to load bookings');
        }
    };

    useEffect(() => {
        loadBookings();
    }, []);

    return (
        <div className="container mx-auto pb-5">
    <h1 className="text-3xl font-semibold mb-5">All Bookings</h1>
    <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 rounded">
            <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Phone</th>
                    <th className="px-4 py-2">Train Name</th>
                    <th className="px-4 py-2">From</th>
                    <th className="px-4 py-2">To</th>
                    <th className="px-4 py-2">Date</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {bookings.map((item, index) => {
                    const { _id, email, name, phone, trainName, from, to, date } = item;
                    return (
                        <tr key={_id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                            <td className="border px-4 py-2">{email}</td>
                            <td className="border px-4 py-2">{name}</td>
                            <td className="border px-4 py-2">{phone}</td>
                            <td className="border px-4 py-2">{trainName}</td>
                            <td className="border px-4 py-2">{from}</td>
                            <td className="border px-4 py-2">{to}</td>
                            <td className="border px-4 py-2">{date}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
</div>

    );
}
