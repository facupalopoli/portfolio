import React from 'react';
import './Testimonials.css';
/* import testimonial1 from '../../../assets/testimonials1.jpg'
import testimonial2 from '../../../assets/testimonials2.jpg'
import testimonial3 from '../../../assets/testimonials3.jpg' */

const Testimonials = () => {
    return(
        <section className='testimonials' id='testimonials'>
            <h2 className='aboutTitle'>Testimonios</h2>
            <div className='divTestimonials'>
                <div className='cardTestimonial uno'>
                    <div className='infoTestimonial'>
                        <h3>Federico Sabiche  <span>★ ★ ★ ★ ★</span></h3>
                        <p className='cita'>Facundo es un compañero que siempre esta predispuesto a ayudar a otro cuando surgen dudas sobre los temas que se están dando en la diplomatura, eso habla de la buena persona que es.</p>
                        <p className='fecha'>14-02-2023</p>
                    </div>
                </div>
                <div className='cardTestimonial dos'>
                    <div className='infoTestimonial'>
                        <h3>Alejandro Eliceche  <span>★ ★ ★ ★ ★</span></h3>
                        <p className='cita'>Ha logrado un sitio web con abundante y amena información, estructurado de forma simple y amigable para el usuario, y conforme a una estetica acorde a la de un destino turístico.</p>
                        <p className='fecha'>15-12-2022</p>
                    </div>
                </div>
                <div className='cardTestimonial tres'>
                    <div className='infoTestimonial'>
                        <h3>Yesica Fumagalli  <span>★ ★ ★ ★ ★</span></h3>
                        <p className='cita'>Mucha facilidad en la comunicación de ideas y congruencia con el resultado final. Diseños simples, suaves y amigables con cualquier tipo de usuario. A seguir trabajando en futuros proyectos!</p>
                        <p className='fecha'>12-09-2022</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Testimonials }
