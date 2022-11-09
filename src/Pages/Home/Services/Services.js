import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch("service.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mx-auto'>
            <h2 className='text-5xl mb-5 font-bold'>Services</h2>
            <p className='text-xl'>Offering Best Private Investigation Services</p>
            <div  className="grid justify-items-center mx-auto my-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;