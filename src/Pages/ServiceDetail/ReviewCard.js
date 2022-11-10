import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const ReviewCard = ({ sreview }) => {
    const { name, img, review } = sreview;
    return (

        <div className="grid grid-cols-1 bg-gray-200 rounded p-5 items-center ">

            {
                sreview?.img ?
                    <img src={img} alt="" className="rounded-full mx-auto" />
                    :
                    <FaUserAlt className='rounded-full mx-auto text-5xl' />
            }
            {
                sreview?.name ?
                    <p className='text-indigo-600 font-semibold mt-5'>{name}</p>
                    :
                    <p className='text-indigo-600 font-semibold mt-5'>Client</p>
            }

            <p className='text-lg my-5'>{review}</p>
        </div>

    );
};

export default ReviewCard;