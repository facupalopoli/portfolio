import React from 'react';
import './Contact.css';
import { useForm } from '@formspree/react';

const Contact = () => {

    const envioForm = (e) =>{
        e.preventDefault()
        console.log(e)        
    }
    
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
                    <h3>Escribime y hagamos magia</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <p>Nombre:</p>
                            <input type="text" name="nombre" id="name" required/>
                        </div>
                        <div>
                            <p>E-mail:</p>
                            <input type="email" name="correo" id="email" required/>
                        </div>
                        <div>
                            <p>Asunto:</p>
                            <input type="text" name="asunto" id="subject" required/>
                        </div>
                        <div className='inputMensaje'>
                            <p>Mensaje:</p>
                            <textarea name="mensaje" id ="message" required></textarea>
                        </div>
                        <input className='btnEnviar' type="submit" value="Enviar consulta"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export { Contact }