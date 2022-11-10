import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';


const ServiceDetail = () => {
    const { user } = useContext(AuthContext);

    const service = useLoaderData();
    const { _id, title, picture, about } = service;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const reviewMessage = form.review.value;

        const review = {
            serviceId: _id,
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
            review: reviewMessage
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                console.log(data)
            })
            .catch(err => console.error(err));

    }
    return (
        <div className='my-10 px-5'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 my-10'>
                <img className='mx-auto' src={picture} alt="" />
                <p className='text-left'>{about}</p>
            </div>
            <h1 className='text-4xl font-bold mb-5'>Our Most Happy Clients <br/>Testimonials</h1>
            <div className="grid gap-5 grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    reviews.map(sreview => <ReviewCard key={sreview._id} sreview={sreview}></ReviewCard>)
                }
            </div>
            <div>
                <h1 className='text-4xl font-bold mb-5'>Add a review</h1>
                {
                    user?.uid ?
                        <form onSubmit={handleReview}>
                            <input type="text" name='review' placeholder="Type here" className="input input-bordered input-info rounded-full w-3/4 " />
                            <input type="submit" className="btn btn-info rounded-full ml-3" value="send" />
                        </form>
                        :
                        <p>Please <Link to='/login' className='font-bold'>
                            <button className="btn btn-info rounded-full text-white">Login</button>
                        </Link> to add a review</p>
                }
            </div>
        </div>
    );
};

export default ServiceDetail;