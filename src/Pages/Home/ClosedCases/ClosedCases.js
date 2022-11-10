import React, { useEffect, useState } from 'react';
import ClosedCaseCard from './ClosedCaseCard';

const ClosedCases = () => {
    const [closedCases, setClosedCases] = useState([]);

    useEffect(() => {
        fetch("https://detective-kevin-server-pulok-thedeveloper.vercel.app/closedcases")
            .then(res => res.json())
            .then(data => setClosedCases(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl mb-5 font-bold'>Checkout My Recently <br/> Closed Cases</h2>
            <div className="grid justify-items-center mx-auto my-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    closedCases.map(closedCase=><ClosedCaseCard key={closedCase._id} closedCase={closedCase}></ClosedCaseCard>)
                }
            </div>
        </div>
    );
};

export default ClosedCases;