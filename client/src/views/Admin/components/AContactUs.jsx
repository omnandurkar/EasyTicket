import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function AContactUs() {
    const [contact, setContact] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);

    const loadContactUsDetails = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/contact`);
            setContact(response.data.data);
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error loading contact details:', error);
            toast.error('Failed to load contact details');
        }
    };

    useEffect(() => {
        loadContactUsDetails();
    }, []);

    const handleContactClick = (index) => {
        setSelectedContact(contact[index]);
    };

    const resolveIssue = (index) => {
        const email = contact[index].email;
        window.location.href = `mailto:${email}`;
    };

    return (
        <>
            <div className='flex space-x-4 justify-center'>
            <div className="container rounded">
                <h1 className="mb-3">Contact Requests</h1>
                <div className="row overflow-y-scroll h-2/6">
                    {contact.map((item, index) => {
                        const { _id, name, email } = item;
                        return (
                            <div key={_id} className="shadow border p-4 rounded-md mb-4 mt-4 ">
                                <div className="" style={{ cursor: 'pointer' }} onClick={() => handleContactClick(index)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <div className="card-body">
                                        <h4 className="font-bold">{name}</h4>
                                        <p className="card-text">{email}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className='container output border p-5 rounded-md border-blue-600 h-4/5'>
                <div className="" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg w-full">
                        <div className="modal-content space-y-6">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Message Details</h5>
                            </div>
                            <div className="container mx-auto ">
                                {selectedContact && (
                                    <div className="bg-white rounded-lg border shadow-md p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="">
                                                <h5 className="font-semibold">Name</h5>
                                                <p>{selectedContact.name}</p>
                                            </div>
                                            <div className="">
                                                <h5 className="font-semibold">Email</h5>
                                                <p>{selectedContact.email}</p>
                                            </div>
                                              {/* <div className="">
                                                <h5 className="font-semibold">Phone</h5>
                                                <p>{selectedContact.phone}</p>
                                            </div> */}
                                        </div>
                                        <hr className="my-4" />
                                        <div className="">
                                            <h5 className="font-semibold">Message</h5>
                                            <p>{selectedContact.message}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="modal-footer space-x-5 mt-2">
                                <button type="button" className="border p-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white" onClick={() => resolveIssue(contact.indexOf(selectedContact))}>Resolve Issue</button>
                                <button type="button" className="border p-2 rounded-md bg-gray-500 hover:bg-gray-600 text-white" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                                <div className='flex justify-center'>
                        <button type='button' className='border p-2 shadow my-10 rounded-md bg-blue-600 hover:bg-blue-500 text-white ' onClick={loadContactUsDetails}  > Fetch Contact Reqests</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
