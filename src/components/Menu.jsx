import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaUtensils, FaServicestack } from "react-icons/fa";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 rounded-lg shadow-lg">
      {/* Botón hamburguesa solo visible en móviles */}
      <div className="sm:hidden flex justify-end mb-2">
        <button onClick={toggleMenu} className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú de navegación */}
      <div className={`${isOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-8`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center text-white hover:text-yellow-200 transition duration-300 text-lg font-medium ${isActive ? 'underline' : ''}`
          }
        >
          <FaHome className="mr-1" /> Home
        </NavLink>
        <NavLink
          to="/acerca"
          className={({ isActive }) =>
            `flex items-center text-white hover:text-yellow-200 transition duration-300 text-lg font-medium ${isActive ? 'underline' : ''}`
          }
        >
          <FaInfoCircle className="mr-1" /> Acerca
        </NavLink>
        <NavLink
          to="/productos"
          className={({ isActive }) =>
            `flex items-center text-white hover:text-yellow-200 transition duration-300 text-lg font-medium ${isActive ? 'underline' : ''}`
          }
        >
          <FaUtensils className="mr-1" /> Productos
        </NavLink>
        <NavLink
          to="/servicios"
          className={({ isActive }) =>
            `flex items-center text-white hover:text-yellow-200 transition duration-300 text-lg font-medium ${isActive ? 'underline' : ''}`
          }
        >
          <FaServicestack className="mr-1" /> Servicios
        </NavLink>
      </div>
    </nav>
  );
};

export default Menu;
