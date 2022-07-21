import React from 'react';
import '../../styles/App.scss';
import Footer from '../Footer/Footer';
import Cards from '../landing/Cards';
import HeroSection from '../landing/HeroSection';


function Home() {
    return(
        <>
        <HeroSection/>
        <Cards/>
        <Footer/>
        </>
    )
}

export default Home;