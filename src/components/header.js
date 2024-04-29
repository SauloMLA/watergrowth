import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
return (
    <div className='iniciobien'>
        <div className="conttent-fir">
        <h2>Cultivando abundancia<br /><span>regando esperanza.</span></h2>
        <p>Desarrollar un sistema de riego accesible y económico para todas las personas, enfocándonos en zonas rurales con poco acceso al agua, mediante la integración de tecnología y energía renovable.</p>
        <Link to="/Servicios" className="info-inipadre" >More Info.</Link>
        </div>
    </div>
);
}

export default Header;
