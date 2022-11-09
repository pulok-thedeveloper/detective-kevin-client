import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/detective-logo.png';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const menuItems = <>
        <li>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/blogs'>Blogs</Link>
            {
                user?.uid ?
                    <>
                        <Link to='/addservice'>Add Service</Link>
                        <Link to='/myreviews'>My Reviews</Link>
                    </>
                    :
                    <></>
            }
        </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='w-12 mx-auto' src={logo} alt="" />
                    <p className='text-sm'>DETECTIVE KEVIN</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <Link onClick={logOut} className="btn">Logout</Link>
                        :
                        <Link to="/login" className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;