import React from 'react';

const ClosedCaseCard = ({closedCase}) => {
    const {title, picture, date, location, client} = closedCase;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-primary">RECENT</div>
                </h2>
                <p>Date: {date}</p>
                <p>Location: {location}</p>
                <p>Client: {client}</p>
                <div className="card-actions">
                    <button className="btn btn-primary mx-auto w-full">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default ClosedCaseCard;