import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logoPortfolio.png'

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    return(
        <header className='header'>
            <img src={logo} alt="logo" />
            <div className={`navBar ${menuToggle && 'open'}`}>
                <a href='#' onClick={()=> setMenuToggle(!menuToggle)}><span>Ho</span>me</a>
                <a href='#about' onClick={()=> setMenuToggle(!menuToggle)}><span>Ac</span>erca</a>
                <a href='#projects' onClick={()=> setMenuToggle(!menuToggle)}><span>Pro</span>yectos</a>
                <a href='#testimonials' onClick={()=> setMenuToggle(!menuToggle)}><span>Tes</span>timonios</a>
                <a href='#contact' onClick={()=> setMenuToggle(!menuToggle)}><span>Co</span>ntacto</a>
            </div>
            <i className={menuToggle ? `bi bi-x-lg cruz` : `bi bi-list hamburguesa`} onClick={()=> setMenuToggle(!menuToggle)}></i>
        </header>
    )
}

export { Navbar }