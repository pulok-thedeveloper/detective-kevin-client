import React from 'react';

const AddService = () => {
    const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const picture = form.img.value;
        const about = form.description.value;

        const service ={
            picture,
            title,
            about
        }
        console.log(service)

        // fetch('http://localhost:5000/services')
        // .then(res => res.json)
        // .then(data => console.log(data))

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err=> console.error(err));
    }
    return (
        <div className='p-5'>
            <h1 className='text-3xl fon-bold mb-8'>Add New Service</h1>
            <form onSubmit={handleAddService} className=' mb-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                    <input name="title" type="text" placeholder="Service Title" className="input input-bordered w-full" />
                    <input name="img" type="text" placeholder="Image URL" className="input input-bordered w-full" />
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full mb-3" placeholder="Add a Description"></textarea>
                <input className='btn w-full' type="submit" value="Add New Service"/>

            </form>
        </div>
    );
};

export default AddService;