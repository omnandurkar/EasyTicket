import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom";
import { auth } from "../../views/Login/config";
import toast from 'react-hot-toast';
import axios from 'axios';

// Profile Dropdown
const ProfileDropDown = ({ user, handleLogout }) => {
    const [state, setState] = useState(false);
    const profileRef = useRef();

    const navigation = [
        { title: "Dashboard", path: "/dashboard" },
        { title: "Admin", path: "/badmin" },
    ];

    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false);
        };
        document.addEventListener('click', handleDropDown);
        return () => {
            document.removeEventListener('click', handleDropDown);
        };
    }, []);

    return (
        <div className={`relative`}>
            <div className="flex items-center space-x-4">
                <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                    onClick={() => setState(!state)}
                >
                    <img
                        src={user.photoURL || "https://randomuser.me/api/portraits/men/46.jpg"}
                        alt="profile"
                        className="w-full h-full rounded-full"
                    />
                </button>
                <div className="lg:hidden">
                    <span className="block">{user.displayName}</span>
                    <span className="block text-sm text-gray-500">{user.email}</span>
                </div>
            </div>
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {navigation.map((item, idx) => (
                    <li key={idx}>
                        <Link className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5" to={item.path}>
                            {item.title}
                        </Link>
                    </li>
                ))}
                <Link onClick={handleLogout} className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5" >
                    LogOut
                </Link>
            </ul>
        </div>
    );
};

const Navbar = () => {
    const [menuState, setMenuState] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            if (!user) {
                throw new Error("User not found");
            }
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/logout`,
                { email: user.email }
            );
            toast.success(response.data.message);
            // toast.success("Logged out successfully");
            localStorage.clear();
            await auth.signOut();
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };


    const navigation = [
        { title: "Home", path: "/" },
        { title: "Contact Us", path: "/contact" },
        { title: "Reviews", path: "/review" },
        { title: "xyz", path: "/" },
    ];

    return (
        <nav className="bg-white border-b">
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <Link to="/">
                        <h1 className="text-2xl font-mono font-extrabold">Booking</h1>
                    </Link>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>

                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {navigation.map((item, idx) => (
                                <li key={idx} className="text-gray-600 text-md font-mono hover:text-gray-900">
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        {!user ? (
                            <Link to="/login" className="flex flex-row h-10 items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                Login
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        ) : (
                            <ProfileDropDown user={user} handleLogout={handleLogout} />
                        )}
                        <button
                            className="outline-none text-gray-400 block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {menuState ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
