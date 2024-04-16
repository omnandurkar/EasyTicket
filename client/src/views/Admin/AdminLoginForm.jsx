import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function AdminLoginForm({ onLogin }) {
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const loadAdmin = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin`);
                const data = response.data.data;
                if (data && data.email && data.password) {
                    setAdminEmail(data.email);
                    setAdminPassword(data.password);
                } else {
                    setError('Admin credentials not found');
                }
            } catch (error) {
                console.error('Error loading admin details:', error);
                setError('Failed to load admin details');
            }
        };

        loadAdmin();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setError('Email or password cannot be empty');
            return;
        }

        if (email === adminEmail && password === adminPassword) {
            toast.success('Welcome Admin Om');
            onLogin();
        } else {
            setError('You are not authorized to access this page.');
            toast.error('Admin Login Fail');
        }
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Admin Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-blue-700">Login</button>
                        </form>
                        {error && <p className="mt-3 text-red-500">{error}</p>}
                    </div>
                </div>
            </div>
        </div>

    );
}
