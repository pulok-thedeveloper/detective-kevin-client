import React from 'react';
import img from '../../../assets/About/about.jpg';
import { FaCheck } from "react-icons/fa";

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 px-10 mb-5">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img alt='' src={img} className=" rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-left">About Me</h1>
                    <p className="py-6 text-left">I'm Kevin, a private investigator with over 12 years experience. I focus on dealing with each case with utmost professionalism and offer complete confidentiality to the client. My aim is to help you find the truth about any doubts that gives you sleepless nights or making you feel insecure about your future.</p>
                    <div className='grid grid-cols-2 text-left gap-5'>
                        <p className='flex items-center gap-3'><FaCheck className='text-blue-600'/> 99% success rate solving cases</p>
                        <p className='flex items-center gap-3'><FaCheck className='text-blue-600'/> Free Consultation</p>
                        <p className='flex items-center gap-3'><FaCheck className='text-blue-600'/> 100% confidential</p>
                        <p className='flex items-center gap-3'><FaCheck className='text-blue-600'/> Expert surveillance</p>
                        <p className='flex items-center gap-3'><FaCheck className='text-blue-600'/> Affordable fees</p>
                        <p className='flex items-center gap-3'><FaCheck className='text-blue-600'/> Over 12 years experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;