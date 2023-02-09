import React from 'react';
import './Navbar.css';
import logo from '../../assets/logoPortfolio.png'

const Navbar = () => {
    return(
        <header className='header'>
            <img src={logo} alt="logo" />
            <div className='navBar'>
                <a href='#'><span>Ho</span>me</a>
                <a href='#about'><span>Ac</span>erca</a>
                <a href='#projects'><span>Pro</span>yectos</a>
                <a href='#testimonials'><span>Tes</span>timonios</a>
                <a href='#contact'><span>Co</span>ntacto</a>
            </div>
            <i className="bi bi-list hamburguesa"></i>
        </header>
    )
}

export { Navbar }