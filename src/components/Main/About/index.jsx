import React from 'react';
import './About.css';
import partners from '../../../assets/aboutImg.png'

const About = () => {
    return(
        <section className='about' id='about'>
            <div className='divAbout'>
                <div className='aboutImg'>
                    <img src={partners} alt="grupo de personas" />
                </div>
                <div className='aboutInfo'>
                    <h2 className='aboutTitle'>Acerca de mi</h2>
                    <h2 className='years'>Experiencia en el campo del diseño y el desarrollo</h2>
                    <p className='textoAbout'>Durante años tuve inquietudes artísticas a través de la música y el diseño. El desarrollo web me ayudó a explotar y fijar esas aptitudes para lograr objetivos concretos y trabajar en proyectos que sean de utilidad a mis clientes y a sus emprendimientos.</p>
                </div>
            </div>
        </section>
    )
}

export { About }