import React from 'react';
import './Contact.css';
import { useForm } from '@formspree/react';

const Contact = () => {
    
    const [state, handleSubmit] = useForm("mlekjjpk")
        
    return(
        <section className='contact' id='contact'>
            <h2 className='aboutTitle'>Contacto</h2>
            <div className='divContact'>
                <div className='connect'>
                    <h3>Conectate conmigo</h3>
                    <h4>¿Te convencí? Buscame en mis redes</h4>
                    <div className='redes'>
                        <a href='https://www.facebook.com/juanfacundo.palopoli' target='_blank'><i className="bi bi-facebook"></i></a>                        
                        <a href='https://www.instagram.com/palofacu/' target='_blank'><i className="bi bi-instagram"></i></a>
                        <a href='https://api.whatsapp.com/send?phone=541144107638&text=Hola Facundo, quería consultarte sobre un proyecto...' target='_blank'><i className="bi bi-whatsapp"></i></a>
                        <a href='mailto:facupalopoli@gmail.com?subject=Consulta sobre pagina web' target='_blank'><i className="bi bi-envelope-fill"></i></a>
                    </div>   
                </div>
                <div className='formulario'>
                    <h3 className={state.succeeded ? `tituloForm lleno` : `tituloForm`}>Escribime y hagamos magia</h3>
                    <form className={state.succeeded ? `datosForm lleno` : `datosForm`} onSubmit={handleSubmit}>
                        <div>
                            <label for='name'>Nombre:</label>
                            <input type="text" name="nombre" id="name" required disabled={state.succeeded?'disabled':''}/>
                        </div>
                        <div>
                            <label for='email'>Email:</label>
                            <input type="email" name="correo" id="email" required disabled={state.succeeded?'disabled':''}/>
                        </div>
                        <div>
                            <label for='subject'>Asunto:</label>
                            <input type="text" name="asunto" id="subject" required disabled={state.succeeded?'disabled':''}/>
                        </div>
                        <div className='inputMensaje'>
                            <label for='message'>Mensaje:</label>
                            <textarea name="mensaje" id ="message" required disabled={state.succeeded?'disabled':''}></textarea>
                        </div>
                        <input className={state.succeeded ? `btnEnviar lleno` : `btnEnviar`} type="submit" value="Enviar consulta" disabled={state.succeeded?'disabled':''}/>
                    </form>
                    {state.succeeded && <span className='mensajeExito'>Los datos fueron enviados, gracias por tu consulta!</span>}
                </div>
            </div>
        </section>
    )
}

export { Contact }