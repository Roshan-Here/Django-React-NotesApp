import React from "react";
import { Link } from "react-router-dom";

function NavbarForMovies() {
  return (
    <div>
      <nav className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500  transition duration-700 ease-out">
        <div className="flex justify-between p-4">
          <div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-black">
            <Link to={'/movies'}>Movies</Link>
          </div>
          <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
            <button className="px-6 py-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white">
              Customers
            </button>
            <button className="px-6 py-2 text-white transition duration-500 ease-out bg-blue-700 rounded-lg hover:bg-blue-800 hover:ease-in">
              <Link to={'/rent'}>
                Rentels
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarForMovies;
