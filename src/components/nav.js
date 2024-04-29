import React from 'react';
import { Link } from "react-router-dom";
function Navbar({wU}) {

    
return (
    <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <Link to="/">
        <label className="logo" href="Index.html">
            <img src="./img/logoicono1.png" alt="logoicono1" width="50px" height="50px" style={{ position: 'sticky', top: '15px' }} />
            <span className="longtitle">Water Growth Solutions</span>
            <span className="shorttitle">WGS</span>
        </label>
        </Link>
        <ul>
            <li><Link className={wU === 'home' ? 'active' : ''} to="/">Home</Link></li>
            <li><Link className={wU === 'service' ? 'active' : ''} to="/Servicios">Services</Link></li>
            <li><Link className={wU === 'contact' ? 'active' : ''} to="/Contacto">Contacto</Link></li>
            <li><a target="_blank" href="https://www.paypal.me/emilioguadarramarmz" rel="noreferrer">Donations</a></li>
        </ul>
    </nav>
);
}

export default Navbar;
