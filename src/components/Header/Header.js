import React from "react";
import headerLogo from "../images/lemon.png"

const Header = () => {
    return (
        <div className="header">
            <div className="left-side">
                <div>
                    <img className="lemon-logo" src={headerLogo} alt = "Lemon-Logo"></img>
                </div>
                <div>
                    <div className="project-name">
                        <h1 className="qr-code-text">qrcode</h1> <h1 className="lemon-text">Lemon</h1>
                    </div>

                    <h1 className="information-text">
                        Fast and Free QR Code Generator
                    </h1>
                </div>
            </div>
            <div className="right-side">

                <a className="element" href="#about">
                    ABOUT
                </a>
                <a className="element" href="#api">
                    QRCODE API
                </a>
                <a className="element" href="#">
                    ENGLISH
                </a>

            </div>
        </div>
    );
};

export default Header;