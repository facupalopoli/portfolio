import './Footer.css';

const Footer = () => {
    return(
        <section className='footer'>
            <div className='divFooter'>
                <div>
                    <h3 className='creaciones'>@2023</h3>
                    <div className='redesFooter'>
                        <a href='https://www.linkedin.com/in/facundopalopoli/' target='_blank'><i className="bi bi-linkedin"></i></a>                        
                        <a href='https://www.instagram.com/palofacu/' target='_blank'><i className="bi bi-instagram"></i></a>
                        <a href='https://api.whatsapp.com/send?phone=541144107638&text=Hola Facundo, quería consultarte sobre un proyecto...' target='_blank'><i className="bi bi-whatsapp"></i></a>
                        <a href='mailto:facupalopoli@gmail.com?subject=Consulta sobre pagina web' target='_blank'><i className="bi bi-envelope-fill"></i></a>
                    </div>
                </div>
            <h3>Desarrollo: Juan Facundo Palópoli</h3>
            </div>
        </section>
    )
}

export { Footer }