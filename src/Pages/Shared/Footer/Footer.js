import React from 'react';
import logo from '../../../assets/detective-logo.png';
import { FaPhone, FaEnvelope, FaPeriscope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer justify-around p-10 bg-base-200 text-base-content">
            <div className='grid justify-center'>
                <div>
                    <img className='w-16 mx-auto' src={logo} alt="" />
                    <p className='text-lg'>DETECTIVE KEVIN</p>
                </div>
                <p className='flex items-center'><FaPhone className='mr-2'/> 555 999 0000</p>
                <p className='flex items-center'><FaEnvelope className='mr-2'/>detectivekevin@info.com</p>
                <p className='flex items-center'><FaPeriscope className='mr-2'/>80 Broklyn Golden Street, USA</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover">Branding</a>
                <a href="/" className="link link-hover">Design</a>
                <a href="/" className="link link-hover">Marketing</a>
                <a href="/" className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Explore</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Blogs</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;