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
                    <i  className="fa-solid fa-microchip"></i>
                    </div>
                    <h4>Mantenimiento electrico</h4>
                    <p>
                    Resuelve tus problemas de circuitos con nosotros. Nuestro equipo especializado está listo para ayudarte en cualquier momento. Aprovecha nuestra experiencia y asegura el funcionamiento óptimo de tu sistema de riego vertical.
                    </p>
                </div>
                </div>

                <div className="column">
                <div className="card">
                    <div className="icon-wrapper">
                    <i className="fa-solid fa-bug-slash"></i>
                    </div>
                    <h4>Soluciones en tu programación</h4>
                    <p>
                    Optimiza tu huerto vertical con nuestro servicio de mantenimiento de programación. 
                    Confía en nuestro equipo experto para resolver cualquier inconveniente en el circuito 
                    y garantizar un funcionamiento sin interrupciones.
                    </p>
                </div>
                </div>

                <div className="column">
                <div className="card3">
                    <div className="icon-wrapper">
                    <i className="fa-solid fa-mobile-screen"></i>
                    </div>
                    <h4>Riega desde tu Bolsillo</h4>
                    <p>
                    Optimiza el riego de tu huerto con nuestra App móvil. Controla fácilmente el sistema desde cualquier lugar. Descárgala ahora y simplifica tu cultivo.
                    </p>
                </div>
                </div>

                <div className="column">
                <div className="card">
                    <div className="icon-wrapper">
                    <i className="fa-solid fa-hammer"></i>
                    </div>
                    <h4>Construye tu Huerto</h4>
                    <p>
                    ¡Te Ayudamos! Aprovecha lo que tienes para crear tu huerto sin costo extra. Solo agrega nuestro sistema para automatizarlo. ¡Hazlo realidad con nuestra ayuda!                    </p>
                </div>
                </div>
            </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Service;


