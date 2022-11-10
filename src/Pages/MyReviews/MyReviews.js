import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard/MyReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setreviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [user?.email])
    return (
        <div>
            <h1 className='text-4xl font-bold my-5'>My Reviews</h1>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-10'>
                {
                    reviews.map(myreview => <MyReviewCard key={myreview._id} myreview={myreview}></MyReviewCard>)
                }
            </div>
            
        </div>
    );
};

export default MyReviews;