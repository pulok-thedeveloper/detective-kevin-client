import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Home/Services/ServiceCard';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div>
            <h2 className='text-5xl my-5 font-bold'>All Services</h2>
            <p className='text-xl'>Offering Best Private Investigation Services</p>
            <div  className="grid justify-items-center mx-auto my-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default AllServices;