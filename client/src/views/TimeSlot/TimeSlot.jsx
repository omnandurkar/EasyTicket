import React, { useState, useEffect } from "react";
import TrainDetails from "./components/TrainDetails/TrainDetails";
import axios from 'axios';
import toast from "react-hot-toast";

const TimeSlot = () => {
  const [trainDetails, setTrainDetails] = useState([]);

  const loadTrainDetails = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/book-train-ticket`);

      setTrainDetails(response.data.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    loadTrainDetails();
  }, []);

  const generateRandomTrainName = () => {
    const trainNames = [
      "Express", "Superfast", "Intercity", "Bullet", "Metro", "Shatabdi", "Duronto",
      "Rajdhani", "Garib Rath", "Jan Shatabdi", "Double Decker", "Humsafar", "Tejas",
      "Antyodaya", "Vande Bharat", "Kavi Guru", "Bhopal Express", "Malwa Express",
      "Dakshin Express", "Utkal Express", "Gomti Express", "Ganga Kaveri Express",
      "Chambal Express", "Nagpur Garib Rath", "Bengaluru Rajdhani", "Mumbai Rajdhani",
      "Howrah Rajdhani", "Chennai Rajdhani", "Mysore Express", "Goa Express",
      "Kerala Express", "Punjab Mail", "Chennai Express", "Vaigai Express",
      "Coimbatore Express", "Godavari Express", "Mangala Lakshadweep Express",
      "Karnataka Express", "Netravati Express", "Swarna Jayanti Express",
      "Chennai Duronto", "Howrah Duronto", "Mumbai Duronto", "Amritsar Shatabdi",
      "Kolkata Shatabdi", "Chandigarh Shatabdi", "Bengaluru Shatabdi",
      "Gujarat Mail", "Gujarat Express", "Pushpak Express"
    ];
    const randomIndex = Math.floor(Math.random() * trainNames.length);
    return trainNames[randomIndex];
  };

  const handleBookTrain = (trainName) => {
    // Save the selected train name to localStorage
    // localStorage.clear("selectedTrainName");
    localStorage.setItem("selectedTrainName", trainName);
    // Redirect to the booking page or perform other actions
    console.log("Selected train name:", trainName);
  };

 ;

  return (
    <div>
      <h2 className="heading">TimeSlot</h2>
      {trainDetails.map((train) => (
        <TrainDetails
          key={train._id} 
          trainName={generateRandomTrainName()}
          runsOn={train.runsOn}
          departureStation={train.from}
          departureTime={train.departureTime}
          departureDate={train.date}
          arrivalStation={train.to}
          arrivalTime={train.arrivalTime}
          arrivalDate={train.arrivalDate}
          pathJugad={`/booking?date=${train.date}&from=${train.from}&to=${train.to}`}
          onBook={handleBookTrain}
        />
      ))}
    </div>
  );
};

export default TimeSlot;
