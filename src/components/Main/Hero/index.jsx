import React from 'react';
import './Hero.css';
import person from '../../../assets/heroPerson.png'

const Hero = () => {
    return(
        <section className='hero'>
            <div className='mitades'>
                <div className='heroIzq'>
                    <h4>Hola,</h4>
                    <h1>Mi Nombre Es <span>Facundo Palópoli</span></h1>
                    <p>Soy desarrollador web, técnico y músico de Buenos Aires, dispuesto a resolver tus necesidades y ofrecerte un servicio óptimo.</p>
                    <div className='botones'>
                        <button className='btnHire'><a href='mailto:facupalopoli@gmail.com?subject=Consulta sobre pagina web' target='_blank'>Contratame</a></button>
                        <button className='btnPortfolio'><a href='#projects'>Ver Portfolio</a></button>
                    </div>
                </div>
                <div className='heroDer'>
                    <img src={person} alt="imagen de diseñador" />
                </div>
            </div>
            <div className='logros'>
                <div className='divLogros'>
                    <div className='clienComp'>
                        <i className="bi bi-people"></i>
                        <p>clientes contentos</p>
                    </div>
                    <div className='spanComp1'>
                        <span>✧</span>
                    </div>
                    <div className='proyComp'>
                        <i className="bi bi-newspaper"></i>
                        <p>proyectos completados</p>
                    </div>
                    <div className='spanComp2'>
                        <span>✧</span>
                    </div>
                    <div className='satisComp'>
                        <i className="bi bi-shield-check"></i>
                        <p>satisfacción garantizada</p>
                    </div>
                </div>
            </div>    
        </section>
    )
}

export { Hero }