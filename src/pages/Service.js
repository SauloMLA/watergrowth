import React from 'react';
import Navbar from '../components/nav';
import Footer from '../components/Footer';

function Service() {
    return (
        <div className='Principal'>
            <Navbar wU="service"/>
        <section className="iniciobien-service">
            <div className="conttent-fir-contact">
                <h2><span>Services</span></h2>
            </div>
            </section>
    
            <section className="servicios">
            <div className="row">
                <div className="column">
                <div className="card">
                    <div className="icon-wrapper">
                    <i style={{ zIndex: '-2' }} className="fas fa-hammer"></i>
                    </div>
                    <h4>Building the orchard</h4>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                    consequatur necessitatibus eaque.
                    </p>
                </div>
                </div>
                <div className="column">
                <div className="card">
                    <div className="icon-wrapper">
                    <i className="fas fa-brush"></i>
                    </div>
                    <h4>Service Heading</h4>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                    consequatur necessitatibus eaque.
                    </p>
                </div>
                </div>
                <div className="column">
                <div className="card3">
                    <div className="icon-wrapper">
                    <i className="fas fa-wrench"></i>
                    </div>
                    <h4>Service Heading</h4>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                    consequatur necessitatibus eaque.
                    </p>
                </div>
                </div>
            </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Service;
