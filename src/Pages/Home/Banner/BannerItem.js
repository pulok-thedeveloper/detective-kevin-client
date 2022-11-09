import React from 'react';
import { Link } from 'react-router-dom';

const BannerItem = ({slide}) => {
    const {id, image, title, prev, next} = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img src={image} alt="" className="w-full" />
            <div className="absolute text-left gap-3 transform -translate-y-1/2 left-12 top-1/3">
                <h1 className='text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold'>{title.first} <br />{title.second} <br />{title.third}</h1>
            </div>
            <div className="absolute text-left gap-3 transform -translate-y-1/2 left-12 top-2/3">
                <Link>
                    <button className='btn mt-5 hover:bg-white hover:text-gray-700'>Discover more</button>
                </Link>
            </div>
            <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;