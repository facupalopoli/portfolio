import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logoPortfolio.png'

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    return(
        <header className='header'>
            <img src={logo} alt="logo" />
            <div className={`navBar ${menuToggle && 'open'}`}>
                <a className='enlaces' href='#' onClick={()=> setMenuToggle(!menuToggle)}>Home</a>
                <a className='enlaces' href='#about' onClick={()=> setMenuToggle(!menuToggle)}>Acerca</a>
                <a className='enlaces' href='#projects' onClick={()=> setMenuToggle(!menuToggle)}>Proyectos</a>
                <a className='enlaces' href='#testimonials' onClick={()=> setMenuToggle(!menuToggle)}>Testimonios</a>
                <a className='enlaces' href='#contact' onClick={()=> setMenuToggle(!menuToggle)}>Contacto</a>
            </div>
            <i className={menuToggle ? `bi bi-x-lg cruz` : `bi bi-list hamburguesa`} onClick={()=> setMenuToggle(!menuToggle)}></i>
        </header>
    )
}

export { Navbar }