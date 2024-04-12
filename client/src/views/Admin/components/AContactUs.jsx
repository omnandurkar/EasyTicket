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
            <div className="container rounded ">
                <h1 className=" mb-3">Contact Requests</h1>
                <div className="row">
                    {contact.map((item, index) => {
                        const { _id, name, email } = item;
                        return (
                            <div key={_id} className="col-lg-4 col-md-6 mb-4 mt-4">
                                <div className="card h-100" style={{ cursor: 'pointer' }} onClick={() => handleContactClick(index)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <div className="card-body">
                                        <h4 className="card-title">{name}</h4>
                                        <p className="card-text">{email}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Message Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {selectedContact && (
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h5>Name</h5>
                                            <p>{selectedContact.name}</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h5>Email</h5>
                                            <p>{selectedContact.email}</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h5>Phone</h5>
                                            <p>{selectedContact.phone}</p>
                                        </div>
                                    </div>
                                    
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h5>Message</h5>
                                            <p>{selectedContact.message}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-info" onClick={() => resolveIssue(contact.indexOf(selectedContact))} >Resolve Issue</button>
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
