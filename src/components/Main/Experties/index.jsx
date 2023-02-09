import React from 'react';
import './Experties.css';

const Experties = () => {
    return(
        <section className='experties'>
            <h2 className='aboutTitle'>Habilidades</h2>
            <div className='divExp'>
                <div className='expCard'>
                    <i className="bi bi-lightbulb"></i>
                    <h3>Diseño Web</h3>
                </div>
                <div className='expCard'>
                    <i className="bi bi-vector-pen"></i>
                    <h3>Gráficas</h3>
                </div>
                <div className='expCard'>
                    <i className="bi bi-laptop"></i>
                    <h3>Desarrollo</h3>
                </div>
                <div className='expCard'>
                    <i className="bi bi-film"></i>
                    <h3>Animaciones</h3>
                </div>
            </div>
        </section>
    )
}

export { Experties }