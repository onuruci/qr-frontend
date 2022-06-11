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

                    <h2 className="information-text">
                        The 100% Free QR Code Generator
                    </h2>
                </div>
            </div>
            <div className="right-side">

                <button className="element">
                    ABOUT
                </button>
                <button className="element">
                    CHROME APP
                </button>
                <button className="element">
                    QRCODE API
                </button>
                <button className="element">
                    ENGLISH
                </button>

            </div>
        </div>
    );
};

export default Header;