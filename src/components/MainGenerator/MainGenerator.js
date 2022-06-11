import React from "react";
import { useState, useRef } from "react";
import QRCode from "qrcode.react";
import './MainGenerator.css'
import selectLogo from "../images/earth-globe-with-continents-maps.png"
import colorPalette from "../images/paint-board-and-brush.png"
import addPhoto from "../images/photo.png"
import customizeLogo from "../images/customize.png"

const MainGenerator = () => {

    const [url, setUrl] = useState("https://www.qrcode-monkey.com/");
    const qrRef = React.useRef();

    const qrCode = (
        <QRCode
            id="qrCodeElToRender"
            size={330}
            value={url}
            bgColor="white"
            fgColor="#141926"
            level="Q"
        />
    );

    const downloadQRCode = () => {
        let canvas = qrRef.current.querySelector("canvas");
        let image = canvas.toDataURL("image/png");
        let anchor = document.createElement("a");
        anchor.href = image;
        anchor.download = `qr-code.png`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        setUrl("");
    };

    return (
        <div className="main-generator">
            


            <div className="qr-editor">
                <button className="selection-button">
                    <div className="select-logo">
                        <img className="logo-image" src={selectLogo} alt = "world-image"/>
                    </div>
                    <div className="select-text">
                        ENTER CONTENT
                    </div>
                    <div className="extend-shrink">

                    </div>
                </button >

                <button className="selection-button">
                    <div className="select-logo">
                        <img className="logo-image" src={colorPalette} alt = "world-image"/>
                    </div>
                    <div className="select-text">
                        SET COLORS
                    </div>
                    <div className="extend-shrink">

                    </div>
                </button >
                <button className="selection-button">
                    <div className="select-logo">
                        <img className="logo-image" src={addPhoto} alt = "world-image"/>
                    </div>
                    <div className="select-text">
                        ADD LOGO IMAGE
                    </div>
                    <div className="extend-shrink">

                    </div>
                </button >
                <button className="selection-button">
                    <div className="select-logo">
                        <img className="logo-image" src={customizeLogo} alt = "world-image"/>
                    </div>
                    <div className="select-text">
                        CUSTOMIZE DESIGN
                    </div>
                    <div className="extend-shrink">

                    </div>
                </button >

                {/*<input type="text" value={url} onChange={e => setUrl(e.target.value)} />
                <button onClick={() => downloadQRCode()}>Download QR</button>*/}
            </div>
            <div className="qr-container">
                <div className="qr" ref={qrRef}>
                    {qrCode}
                </div>
            </div>
        </div>
    );
};

export default MainGenerator;