import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Info from '../Info/Info';
import Products from '../Products/Products';
import Teams from '../Teams/Teams';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Info></Info>
            <Products></Products>
            <Teams></Teams>
        </div>
    );
};

export default Homepage;