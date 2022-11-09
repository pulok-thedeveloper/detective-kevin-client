import React from 'react';
import img1 from '../../../assets/Header/1.jpg';
import img2 from '../../../assets/Header/2.jpg';
import img3 from '../../../assets/Header/3.jpg';
import BannerItem from './BannerItem';


const sliderData =[
    {
        image: img1,
        title: {
            first: 'The Best Private',
            second: 'Investigation',
            third: 'Services',
        },
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        title: {
            first: 'Know The Truth',
            second: 'For Peace of',
            third: 'Mind',
        },
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        title: {
            first: "Let's Hire",
            second: 'a Private',
            third: 'Investigator',
        },
        prev: 2,
        id: 3,
        next: 1
    }
]


const Banner = () => {
    return (
        <div className="carousel w-full rounded my-5">

        {
            sliderData.map(slide=> <BannerItem
            key={slide.id}
            slide={slide}
            ></BannerItem>)
        }
        </div>
    );
};

export default Banner;