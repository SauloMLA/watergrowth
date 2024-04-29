import React from 'react';
import Header from '../components/header';
import Navbar from '../components/nav';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className='principal'>
        <Navbar wU="home"/>
        <div className='header'>
            <Header/>
        </div>
        <div className="us">
            <AboutUs/>
        </div>
        <div className="Verde">

        </div>
        <div className="blanqiuto"></div>
        <div className="Cafecito"></div>
        <div className="Blanco"></div>
        <Footer/>
        </div>
  );
}

export default Home;
