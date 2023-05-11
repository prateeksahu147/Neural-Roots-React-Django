import "../../styles/MainStyle.css";
import React from "react";
import MainCarousel from "../../layout/neural-roots-main/MainCarousel";
import NavbarMain from "../../layout/neural-roots-main/Navbar";
import AboutMain from "../../layout/neural-roots-main/AboutMain";
import ServiceMain from "../../layout/neural-roots-main/ServiceMain";
import ContactMain from "../../layout/neural-roots-main/ContactMain";

const Main = () =>{
    return(
        <div> 
            <NavbarMain />
            <MainCarousel />
            <AboutMain />
            <ServiceMain />
            <ContactMain />
        </div>
    )
}
export default Main