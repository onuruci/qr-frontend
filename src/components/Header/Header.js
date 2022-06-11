import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="left-side">
                <div className="project-name">
                    <div className="qr-code-text">qrcode</div> <div className="lemon-text">Lemon</div>
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