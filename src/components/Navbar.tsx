import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Logo
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                to="/" 
                className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-900 hover:text-gray-700'} 
                           px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </Link>
              <Link 
                to="/contact" 
                className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-900 hover:text-gray-700'} 
                           px-3 py-2 rounded-md text-sm font-medium`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md ${
                darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {darkMode ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <div className="-mr-2 flex sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-900 hover:text-gray-700'
            }`}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-900 hover:text-gray-700'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;