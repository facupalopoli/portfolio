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
                        <h3>Marta Ruiz  <span>★ ★ ★ ★ ★</span></h3>
                        <p className='cita'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, tempora ducimus quaerat perferendis minima recusandae repudiandae reiciendis aspernatur perspiciatis veniam repellat</p>
                        <p className='fecha'>12-09-2022</p>
                    </div>
                </div>
                <div className='cardTestimonial dos'>
                    <div className='infoTestimonial'>
                        <h3>Oscar Ruiz  <span>★ ★ ★ ★ ★</span></h3>
                        <p className='cita'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, tempora ducimus quaerat perferendis minima recusandae repudiandae reiciendis aspernatur perspiciatis veniam repellat</p>
                        <p className='fecha'>12-09-2022</p>
                    </div>
                </div>
                <div className='cardTestimonial tres'>
                    <div className='infoTestimonial'>
                        <h3>Jorge Perez  <span>★ ★ ★ ★ ★</span></h3>
                        <p className='cita'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, tempora ducimus quaerat perferendis minima recusandae repudiandae reiciendis aspernatur perspiciatis veniam repellat</p>
                        <p className='fecha'>12-09-2022</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Testimonials }
