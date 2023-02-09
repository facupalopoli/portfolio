import React from 'react';
import './Main.css';
import { Hero, About, Experties, Projects, Testimonials, Contact } from '../../components';

const Main = () => {
    return(
        <>
        <Hero/>
        <About/>
        <Experties/>
        <Projects/>
        <Testimonials/>
        <Contact/>
        </>
    )
}

export { Main }