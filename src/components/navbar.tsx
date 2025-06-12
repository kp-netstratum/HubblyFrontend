import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 px-10 xl:px-96 md:px-40 pt-10 hover:scale-102 transition duration-300">
      <div className="flex justify-between items-center py-6 px-6 md:px-10 shadow-md bg-gradient-to-br via-gray-800 border border-gray-700 rounded-full">
        <div className="text-2xl font-bold text-blue-500 cursor-pointer hover:scale-105 transition duration-300" onClick={() => window.location.href = "/"}>Hubbly</div>
        <nav className="hidden md:flex gap-8 text-white font-semibold justify-center items-center">
          <a href="/" className="hover:text-blue-500 hover:scale-105 transition duration-300">
            Home
          </a>
          <a href="/events" className="hover:text-blue-500 hover:scale-105 transition duration-300">
            Events
          </a>
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 hover:scale-105 transition duration-300 cursor-pointer">
              Create Event
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden shadow-sm mt-5">
          <nav className="flex flex-col gap-4 text-white font-semibold bg-gradient-to-br via-gray-800 border border-gray-700 rounded-lg p-4">
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
            <a href="/events" className="hover:text-blue-500">
              Events
            </a>
            <button className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
              Create Event
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
