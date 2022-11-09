import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {
    const {picture, title, about} = service;
    return (
        
        <div className="card w-96 bg-base-100 shadow-xl text-left">
            <PhotoProvider>
            <figure>
            <PhotoView src={picture}>
            <img className='cursor-pointer' src={picture} alt="Shoes" />
            </PhotoView>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{about.slice(0, 80)}...</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
            </PhotoProvider>
        </div>
        
    );
};

export default ServiceCard;