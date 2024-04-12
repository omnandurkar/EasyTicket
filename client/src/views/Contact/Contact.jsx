import React, { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function ContactUs() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact`,{
            name, phone, email, message
        });
        toast.success(response.data.message);
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <p className="text-center text-3xl font-semibold text-gray-800">Contact Us</p>
                <p className="text-center text-lg text-gray-600 mt-2">Our team of customer care ninjas is ready to hear from you.</p>
                <hr className="my-8 border-t border-gray-200" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <form onSubmit={handleSubmit} className="text-center border border-gray-300 rounded-lg p-8">
                            <p className="text-xl font-semibold text-gray-800 mb-4">Reach out to us!</p>
                            <p className="text-gray-600">Ready to hear from You 💌</p>
                            <input type='text' placeholder='Enter your name' className='input-1 rounded mb-4 border border-gray-300 px-4 py-2 block w-full' onChange={(e) => setName(e.target.value)} />
                            <input type='text' placeholder='Enter your email' className='input-2 rounded mb-4 border border-gray-300 px-4 py-2 block w-full' onChange={(e) => setEmail(e.target.value)} />
                            <input type='text' placeholder='Enter your contact no' className='input-3 rounded mb-4 border border-gray-300 px-4 py-2 block w-full' onChange={(e) => setPhone(e.target.value)} />
                            <input type='text' placeholder='Enter your message' className='input-4 rounded mb-4 border border-gray-300 px-4 py-2 block w-full' onChange={(e) => setMessage(e.target.value)} />
                            <button type="submit" className="btn btn-info w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
                        </form>
                    </div>

                    <div>
                        <p className="text-xl font-semibold text-gray-800 mb-4">Customer Care</p>
                        <div className="border rounded-lg p-4 flex items-center">
                            <img  alt='Om' className='w-12 h-12 rounded-full mr-4' />
                            <div>
                                <p className="font-semibold">Om Nandurkar</p>
                                <p className="text-gray-600">Customer Care</p>
                                <p className="text-gray-600">+91 **********14</p>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4 flex items-center mt-4">
                            <img  alt='Nidhi' className='w-12 h-12 rounded-full mr-4' />
                            <div>
                                <p className="font-semibold">Nidhi Jangde</p>
                                <p className="text-gray-600">Customer Care</p>
                                <p className="text-gray-600">+91 **********88</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <p className="text-xl font-semibold text-gray-800 mb-4">Other ways to connect</p>
                        <div className="border rounded-lg p-4 flex items-center">
                            <img alt='Facebook' className='w-12 h-12 mr-4' />
                            <p className="text-gray-600">Be the first on your block to get product updates, announcements, news, and lots of really good content. Like us on Facebook today!</p>
                        </div>
                    </div>
                    <div>
                        <div className="border rounded-lg p-4 flex items-center">
                            <img  alt='Twitter' className='w-12 h-12 mr-4' />
                            <p className="text-gray-600">Where are the best tips on conversion optimization, landing pages, content marketing SEO & SEM? Follow us on Twitter today!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
