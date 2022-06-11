import React from "react";
import "./Home.css"
import Header from "../Header";

import MainGenerator from "../MainGenerator/MainGenerator";

const Home = () => {

    return(
        <div className="home-super-class">
            
            <Header></Header>
            <div className="main-content">
                <MainGenerator/>
            </div>
            <div className="footer">
                
            </div>
        </div>
    );
};

export default Home;