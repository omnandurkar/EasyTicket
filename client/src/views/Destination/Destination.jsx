import React from 'react';
import { useParams } from 'react-router-dom';
import bookingData from '../../configs/Booking/Transport.json';
import Card from '../../components/Card/Card';
import { Infoplane, Infotrain } from '../../configs/Info/Info';
import BookingForm from '../../components/BookingForm/BookingForm';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Destination() {
    const { id } = useParams();
    const booking = bookingData.find(item => item.id === id);

    if (!booking) {
        return <div>Booking not found</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="container-fluid p-0 relative mt-5">
                <img src={booking.poster} alt="Poster" className="w-full h-auto" style={{ height: '570px', filter: 'brightness(70%)' }} />
                <div className="absolute top-0 left-1/2 mt-5 transform -translate-x-1/2 text-center text-white">
                    <h1 className="mb-4">{booking.tag}</h1>
                    <p>{booking.description}</p>
                </div>
            </div>
            <BookingForm id={parseInt(booking.id)} />
            <div className="mt-5 text-center">
                <h2 className="mt-5 text-info-emphasis">Top {booking.transport} Deals From India:</h2>
            </div>
            <div className="container mt-3 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        id === '1' && Infoplane.map((info, index) => (
                            <div key={index} className="flex justify-center">
                                {/* <Card {...info} /> */}
                            </div>
                        ))
                    }
                    {
                        id === '2' && Infotrain.map((info, index) => (
                            <div key={index} className="flex justify-center">
                                {/* <Card {...info} /> */}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="container col-xxl-12 px-4 py-5 mx-auto">
                <div className="flex">
                    <div className="flex-1 border rounded-md p-3">
                        <h2 className='text-info-emphasis'>{booking.title}</h2>
                        <p className='lh-base details'>{booking.details}</p>
                    </div>
                    <div className="flex-1 ml-4">
                        <img src={booking.img} alt="Transport" className="w-full h-auto rounded-md border" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
