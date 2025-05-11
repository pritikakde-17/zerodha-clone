import React from 'react';
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Section from './Section';


function HomePage () {
    return ( 
    
        <>
        <Navbar/>
        <Section/>
        <Awards/>
        <Stats/>
        
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>

        </>
     );
}

export default HomePage ;