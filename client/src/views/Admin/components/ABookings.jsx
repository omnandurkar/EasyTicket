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
        <div className="container pb-5">
            <h1>All Bookings</h1>
            <table className="table rounded mt-5">
                <thead>
                    <tr>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody >
                    {bookings.map((item, index) => {
                        const { _id, email, name, phone } = item;
                        return (
                            <tr key={_id}>
                                <td>{email}</td>
                                <td>{name}</td>
                                <td>{phone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
