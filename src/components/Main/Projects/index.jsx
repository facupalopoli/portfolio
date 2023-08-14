import React from 'react';
import './Projects.css';
import billetera from '../../../assets/projectsBilletera.png'
import nostra from '../../../assets/projectsNostra.png'
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
                    <img src={billetera} alt="imagen de sitio web"/>
                    <div className='infoProject'>
                        <h2>BilleterApp</h2>
                        <p>Sitio web adaptable que sirve como calculadora digital de gastos.</p>
                        <button><a href='https://facupalopoli.github.io/billeteraapp/' target='_blank'>Ver en GitHub</a></button>
                    </div>
                </div>
                <div className='cardProject'>
                    <img src={nostra} alt="imagen de sitio web"/>
                    <div className='infoProject'>
                        <h2>E-Commerce</h2>
                        <p>Proyecto final de la diplomatura UTN integrando tecnologías Full Stack.</p>
                        <button><a href='https://dms.licdn.com/playlist/vid/D4D05AQE40yCxYgTRUw/mp4-720p-30fp-crf28/0/1690418235109?e=1692640800&v=beta&t=-e_S3EIAOsua9-7V7pgA13otiBwN7YyW0fH0gSut1EM' target='_blank'>Ver Demo</a></button>
                    </div>
                </div>
                <div className='cardProject'>
                    <img src={rym} alt="imagen de sitio web"/>
                    <div className='infoProject'>
                        <h2>Character search engine</h2>
                        <p>Buscador de personajes de la serie Rick and Morty. Hecho para prácticas.</p>
                        <button><a href='https://facupalopoli.github.io/character-search-engine/' target='_blank'>Ver en GitHub</a></button>
                    </div>
                </div>
                <div className='cardProject'>
                    <img src={pHero} alt="imagen de sitio web"/>
                    <div className='infoProject'>
                        <h2>Hero section example</h2>
                        <p>Diseño adaptable a diferentes dispositivos de una sección "Hero".</p>
                        <button><a href='https://facupalopoli.github.io/hero-section-example/' target='_blank'>Ver en GitHub</a></button>
                    </div>
                </div>
                <div className='cardProject'>
                    <img src={pNavbar} alt="imagen de sitio web"/>
                    <div className='infoProject'>
                        <h2>NavBar examples</h2>
                        <p>Ejemplo de diseño de dos "Navbar" de múltiples usos.</p>
                        <button><a href='https://facupalopoli.github.io/navbar-examples/' target='_blank'>Ver en GitHub</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Projects }