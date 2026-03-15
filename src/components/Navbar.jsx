import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import { Home, AppWindow, Download } from "lucide-react";
import { FaGithub } from 'react-icons/fa';
import logo from '../assets/logo.png'
const Navbar = () => {
    const navigate=useNavigate();
    const navClass = ({ isActive }) => isActive ? "active" : "";
    const links = [
        { name: "Home", path: "/", icon: Home },
        { name: "Apps", path: "/apps", icon: AppWindow },
        { name: "Installation", path: "/installation", icon: Download },
    ];
    const renderedLinks = links.map(link => {
        const Icon = link.icon;
        return <li key={link.path}>
            <NavLink to={link.path} className={navClass}>
                <Icon className='inline-block' stroke='currentColor' size={16}/>
                {link.name}
            </NavLink>
        </li>
    });
    return (
        <nav className="navbar bg-base-100 shadow-sm padding">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {renderedLinks}
                    </ul>
                </div>
                <div className='flex justify-start gap-2 items-center cursor-pointer' onClick={()=>navigate('/')}>
                    <img className='w-6 h-6' src={logo} alt="Logo" />
                    <span className="text-xl font-bold text_gradient">appNest</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {renderedLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn1 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white  hover:opacity-90 transition-opacity duration-200">
                    <FaGithub />
                    Contribute
                </button>
            </div>
        </nav>
    );
};

export default Navbar;