import React from "react";
import "./Home.css"
import Header from "../Header";

import MainGenerator from "../MainGenerator/MainGenerator";
import Footer from "../Footer";

const Home = () => {

    return(
        <div className="home-super-class">
            
            <Header></Header>
            <div className="main-content">
                <MainGenerator/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;