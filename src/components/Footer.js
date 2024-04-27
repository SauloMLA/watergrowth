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
            <p>Cultivando abundancia, regando esperanza. <br></br>
            Soluciones tecnológicas accesibles a quienes más lo necesitan.</p>
            <p>Transforma la agricultura rural con nuestro sistema vertical: accesible, eficiente y sostenible.</p>
        </div>
        <div className="box">
            <h2>Follow Us</h2>
            <div className="red-social">
            
            <a target="_blank" href="https://www.instagram.com/watergrowthsolutions/" className="fa-brands fa-instagram"></a>
            <a href="mailto:watergrowthsolutions@gmail.com" className="fa fa-envelope"></a>
            <a href="" className="fa-brands fa-youtube"></a>
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
