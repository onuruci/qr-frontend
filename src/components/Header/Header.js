import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="left-side">
                <div className="project-name">
                    <h1 className="qr-code-text">qrcode</h1> <h1 className="lemon-text">Lemon</h1>
                </div>

                <div className="information-text">
                    The 100% Free QR Code Generator
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