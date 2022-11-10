import React from 'react';
import useTitle from '../../../hook/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ClosedCases from '../ClosedCases/ClosedCases';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ClosedCases></ClosedCases>
        </div>
    );
};

export default Home;