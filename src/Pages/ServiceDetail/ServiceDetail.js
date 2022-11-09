import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const service = useLoaderData();
    const {title, picture, about} = service;
    return (
        <div className='my-10 px-5'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 my-10'>
            <img className='mx-auto' src={picture} alt=""/>
            <p className='text-left'>{about}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;