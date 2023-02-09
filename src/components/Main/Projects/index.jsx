import React from 'react';
import './Projects.css';
import billetera from '../../../assets/projectsBilletera.png'
import cabania from '../../../assets/projectsCabania.png'
import rym from '../../../assets/projectsRickanmorty.png'
import pHero from '../../../assets/projectsHero.png'
import pNavbar from '../../../assets/projectsNavbar.png'
/* import tutor from '../../../assets/projectsTutor.png' */

const Projects = () => {
    return(
        <section className='projects' id='projects'>
            <h2 className='aboutTitle'>Mis Proyectos</h2>
            <div className='divProjects'>
                <div className='cardProject'>
                    <img src={billetera} alt="imagen de sitio web" />
                    <div className='infoProject'>
                        <h2>Billetera App</h2>
                        <p>Sitio web adaptable a celulares, tablets y PC's de escritorio, que sirve como billetera digital.</p>
                        <button><a href='https://facupalopoli.github.io/billeteraapp/' target='_blank'>Ver en GitHub</a></button>
                    </div>
                </div>
                <div className='cardProject'>
                    <img src={cabania} alt="imagen de sitio web" />
                    <div className='infoProject'>
                        <h2>Cabaña San Francisco</h2>
                        <p>Proyecto sobre Cabaña San Francisco, casa de montaña en Meliquina, Neuquen. Patagonia.</p>
                        <button><a href='https://facupalopoli.github.io/cabania/' target='_blank'>Ver en GitHub</a></button>
                    </div>
                </div>
                <div className='cardProject'>
                    <img src={rym} alt="imagen de sitio web" />
                    <div className='infoProject'>
                        <h2>Buscador de personajes</h2>
                        <p>Buscador de personajes de la serie Rick and Morty. Hecho para prácticas.</p>
                        <button><a href='https://facupalopoli.github.io/rickandmortyAPI/' target='_blank'>Ver en GitHub</a></button>
                    </div>
                </div>
                <div className='cardProject'>
                    <img src={pHero} alt="imagen de sitio web" />
                    <div className='infoProject'>
                        <h2>Sección Hero</h2>
                        <p>Ejemplo de diseño de una sección "Hero" correspondiente a una landing page.</p>
                        <button><a href='https://facupalopoli.github.io/ejerciciohtmlcssclase13/' target='_blank'>Ver en GitHub</a></button>
                    </div>
                </div>
                <div className='cardProject'>
                    <img src={pNavbar} alt="imagen de sitio web" />
                    <div className='infoProject'>
                        <h2>Barra de navegación</h2>
                        <p>Ejemplo de diseño de dos "Navbar" de múltiples usos.</p>
                        <button><a href='https://facupalopoli.github.io/ejerciciohtmlcssclase11/' target='_blank'>Ver en GitHub</a></button>
                    </div>
                </div>
                {/* <div className='cardProject'>
                    <img src={tutor} alt="imagen de sitio web" />
                    <div className='infoProject'>
                        <h2>Tutor App</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae faucibus vel id mattis laoreet posuere.</p>
                        <button><a href='#'>See on Behance</a></button>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export { Projects }