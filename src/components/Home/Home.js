import React from "react";
import "./Home.css"
import Header from "../Header";

import MainGenerator from "../MainGenerator/MainGenerator";
import Footer from "../Footer";
import Information from "../InformationContent"


const Home = () => {

    return (
        <div className="root-container">
            <div className="home-super-class">

                <Header></Header>
                <MainGenerator />
            </div>
            <div className="informational-section-container">
                <Information />
                <Footer />
            </div>
        </div>
    );
};

export default Home;