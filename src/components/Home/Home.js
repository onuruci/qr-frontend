import React from "react";
import "./Home.css"
import Header from "../Header";

import MainGenerator from "../MainGenerator/MainGenerator";
import Footer from "../Footer";
import Information from "../InformationContent"

const Home = () => {

    return(
        <div className="home-super-class">
            
            <Header></Header>
            <MainGenerator/>
            <Information/>
            <Footer/>
        </div>
    );
};

export default Home;