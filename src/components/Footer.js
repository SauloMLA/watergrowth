import React from 'react';

function Footer() {
return (
        <footer className="pie-pagina espaciopiedepagina">
        <div className="grupo-1">
        <div className="box">
            <figure>
            <a href="#">
                <img src="./img/logoicono1.png" alt="Logo WGS" />
            </a>
            </figure>
        </div>
        <div className="box">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
        </div>
        <div className="box">
            <h2>Follow Us</h2>
            <div className="red-social">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-envelope"></a>
            <i className="fa fa-envelope"></i>
            <a href="#" className="fa fa-youtube"></a>
            </div>
        </div>
        </div>
        <div className="grupo-2">
        <small>Copyright &copy; 2024 <b>Water Growth Solutions</b></small>
        </div>
    </footer>
);
}

export default Footer;
