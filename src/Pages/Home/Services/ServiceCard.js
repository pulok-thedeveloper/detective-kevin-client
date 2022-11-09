import React from 'react';

const ServiceCard = ({service}) => {
    const {picture, title, about} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-left">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{about.slice(0, 80)}...</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;