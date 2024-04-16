import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
import Navbar from '../../components/Navbar/Navbar';
// import Footer from './Footer';
// import Flightdetails from './Flightdetails';

function Dashboard() {
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("email");
  const profile = localStorage.getItem("userPhoto");

  // Random Phone Number
  function generateRandomMobileNumber() {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    return `+91 ${randomNumber.toString().substring(0, 3)} ${randomNumber.toString().substring(3, 6)} ${randomNumber.toString().substring(6)}`;
  }

  const randomMobileNumber = generateRandomMobileNumber();

  // Random birth date
  function generateRandomBirthdate() {
    const currentYear = new Date().getFullYear();
    const minBirthYear = currentYear - 99;
    const maxBirthYear = currentYear - 10;
    const randomBirthYear = Math.floor(Math.random() * (maxBirthYear - minBirthYear + 1)) + minBirthYear;
    const randomBirthMonth = Math.floor(Math.random() * 12) + 1;
    const daysInMonth = new Date(randomBirthYear, randomBirthMonth, 0).getDate();
    const randomBirthDay = Math.floor(Math.random() * daysInMonth) + 1;
    return `${randomBirthMonth.toString().padStart(2, '0')}/${randomBirthDay.toString().padStart(2, '0')}/${randomBirthYear}`;
  }
  
  const randomBirthdate = generateRandomBirthdate();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-5">
        <div className="flex flex-col items-center space-y-5">
          <div className="flex justify-center">
            <img src={profile} className="rounded-full w-24 h-24" alt="Profile" />
          </div>
          <p className="text-lg font-semibold">Hii !! {name}..</p>
          <div className="bg-gray-200 rounded-lg p-4 shadow-md">
    <table className="w-full table-auto">
        <tbody>
            <tr className="bg-gray-100 ">
                <td className="px-4 py-2 font-semibold">Name:</td>
                <td className="px-4 py-2">{name}</td>
            </tr>
            <tr className=''>
                <td className="px-4 py-2 font-semibold">Location:</td>
                <td className="px-4 py-2">India</td>
            </tr>
            <tr className="bg-gray-100 rounded">
                <td className="px-4 py-2 font-semibold">Email:</td>
                <td className="px-4 py-2">{email}</td>
            </tr>
            <tr>
                <td className="px-4 py-2 font-semibold">Mobile:</td>
                <td className="px-4 py-2">{randomMobileNumber}</td>
            </tr>
            <tr className="bg-gray-100">
                <td className="px-4 py-2 font-semibold">DOB:</td>
                <td className="px-4 py-2">{randomBirthdate}</td>
            </tr>
        </tbody>
    </table>
</div>

        </div>
      </div>

      <div className="container mx-auto mt-10">
        <div className="text-center">
          <h4 className="text-2xl mx-auto font-semibold text-gray-800 mb-4">🚂  Current Trains </h4>
          {/* ✈ */}
        </div>
        <div>
          
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Add More Trains..</h1>
          <p className="text-lg text-gray-600 mb-8">Travel More And Keep Shinig...</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            <Link to="/">Book Now</Link>
          </button>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Dashboard;
