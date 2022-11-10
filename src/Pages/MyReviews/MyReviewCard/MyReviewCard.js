import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const MyReviewCard = ({ myreview }) => {
    const { serviceId, review } = myreview;
    const [service, setservice] = useState({});
    const [prevreview, setreview] = useState(review);

  const handleMessageChange = event => {
    setreview(event.target.value);
    console.log(event.target.value);
  };

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setservice(data))
    }, [serviceId])

    const handleEdit = id => {
        fetch(`http://localhost:5000/reviews/${id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(prevreview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                alert('User Updated');
                
            }
            console.log(data)
        })
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you want to cancel this order')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-1.5">{service.title} (Editing)</h3>
                    <form onSubmit={() =>handleEdit(myreview._id)}>
                        <textarea onChange={handleMessageChange} name="myreview" className="textarea textarea-bordered h-24 w-full mb-3" value={prevreview}></textarea>
                        <input type="submit" className="btn btn-info ml-3" value="Save" />
                    </form>
                </div>
            </div>
            <figure><img src={service.picture} alt="Shoes" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">{service.title}</h2>
                <p>{review}</p>
                <div className="card-actions justify-start mt-3">
                    <label htmlFor="my-modal-3" className="btn btn-info text-white"><FaEdit className='mr-1' />  Edit</label>
                    <button onClick={() => handleDelete(myreview._id)} className="btn btn-error text-white"><FaTrash className='mr-1' /> Delete</button>

                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;