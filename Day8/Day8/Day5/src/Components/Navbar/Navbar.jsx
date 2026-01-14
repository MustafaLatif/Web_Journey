import React from 'react'
import { LiaCalendarCheckSolid } from 'react-icons/lia';
import { Link , useLocation} from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className="bg-blue-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">

                        <Link to="/" className="text-white font-bold text-xl">MyApp</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link to="/"
                            className={`text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/' ? 'bg-blue-700' : 'hover:bg-blue-500'
                                }`}>
                            Home
                        </Link>

                        <Link to="/about"
                            className={`text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/about' ? 'bg-blue-700' : 'hover:bg-blue-500'
                                }`}>
                            About Us

                        </Link>
                        <Link to="/contact"
                            className={`text-white px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'bg-blue-700' : 'hover:bg-blue-500'
                                }`}>
                            Contact Us

                        </Link>

                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar
