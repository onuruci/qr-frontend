import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="left-side">
                <div className="project-name">
                    <tr className="qr-code-text">qrcode</tr> <tr className="lemon-text">Lemon</tr>
                </div>

                <div className="information-text">
                    The 100% Free QR Code Generator
                </div>
            </div>
            <div className="right-side">

                <div className="element">
                    About
                </div>
                <div className="element">
                    About
                </div>
                <div className="element">
                    About
                </div>
                <div className="element">
                    About
                </div>

            </div>
        </div>
    );
};

export default Header;