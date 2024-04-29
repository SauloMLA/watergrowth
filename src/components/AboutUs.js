import React from 'react';

function AboutUs() {
return (
    <div className="second-sec">
      <div className="flex-container">
        <div className="divsecond-sec">
          <h4 className='quien'>¿Quiénes somos?</h4>
          <p>En Water Growth Solutions, nos dedicamos a ofrecer soluciones innovadoras para la agricultura sostenible. Nuestro enfoque se centra en la creación de sistemas de huerto vertical accesibles y económicos, especialmente diseñados para las zonas rurales afectadas por la escasez de agua. Apostamos por la utilización de energías renovables y la equitativa asignación de recursos para enfrentar los desafíos globales en la producción de alimentos. </p>
          <p>Con un equipo especializado, nos comprometemos a brindar servicios de mantenimiento de programación y una aplicación móvil intuitiva para configurar el sistema de riego, permitiendo a nuestros clientes optimizar la eficiencia de sus cultivos. En Water Growth Solutions, estamos comprometidos con el desarrollo de prácticas agrícolas sustentables y la mejora del acceso a la alimentación en todo el mundo. </p>
        </div>
        <div>
          <img src="./img/vergarchi.jpg" alt="vergarchi" className="vergarch-img mobile-hidden" />
        </div>
      </div>
    </div>
    
    
);
}

export default AboutUs;
