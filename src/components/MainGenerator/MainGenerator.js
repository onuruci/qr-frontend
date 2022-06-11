import React from "react";
import { useState, useRef } from "react";
import QRCode from "qrcode.react";
import './MainGenerator.css'
import selectLogo from "../images/earth-globe-with-continents-maps.png"
import colorPalette from "../images/paint-board-and-brush.png"
import addPhoto from "../images/photo.png"
import customizeLogo from "../images/customize.png"
import plusSign from "../images/plus.png";
import minusSign from "../images/minus.png"

const MainGenerator = () => {

    const [url, setUrl] = useState("");
    const [urlToDownload, setUrlToDownload] = useState("https://www.qrcode-lemon.com/");
    const [qrColor, setQRColor] = useState("#141926");
    const qrRef = React.useRef();
    const [activeTab, setActiveTab] = useState(0);

    const normalColor = "#141926";
    const lightColor = "#9fb2c0";

    const qrCode = (
        <QRCode

          id="qrCodeElToRender"
          size={350}
          value={urlToDownload}
          bgColor="white"
          fgColor={qrColor}
          level="Q"
          includeMargin
        />
    );

    const qrToDownload = (
        <QRCode
          id="qrCodeElToRender"
          size={1200}
          value={urlToDownload}
          bgColor="white"
          fgColor="#000"
          level="Q"
          includeMargin
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
    };

    const generateQRCode = () => {
        setQRColor(lightColor);
        setTimeout(() => {
            setQRColor(normalColor);
            setUrlToDownload(url);
        }, 1000); 
    };

    const renderActiveTab = (val) => {
    
        if(val == activeTab){
            
            if(val == 0){

                return <div className="url-content">
                    <div>
                        Your Url
                    </div>
                    <input className="url-input" type="text" placeHolder="https://www.qrcode-lemon.com/" value={url} onChange={e => setUrl(e.target.value)} />
                </div>  

            }


            else if(val == 1){

            }

        }

    }

    return (
        <div className="main-generator">
            


            <div className="qr-editor">
                <button id = "0" onClick={() => activeTab == 0 ? setActiveTab(-1) : setActiveTab(0)} className="selection-button">
                    <div className="select-logo">
                        <img className="logo-image" src={selectLogo} alt = "world-image"/>
                    </div>
                    <div className="select-text">
                        ENTER CONTENT
                    </div>
                    <div className="extend-shrink">
                        {activeTab != 0 ? <img className="plus-minus" src={plusSign} alt = "plus sign"></img> : <img className="plus-minus" src={minusSign} alt = "minus sign"></img>}
                    </div>
                </button>
                
                {renderActiveTab(0)}

                <button id = "1" onClick={() => activeTab == 1 ? setActiveTab(-1) : setActiveTab(1)} className="selection-button">
                    <div className="select-logo">
                        <img className="logo-image" src={colorPalette} alt = "world-image"/>
                    </div>
                    <div className="select-text">
                        SET COLORS
                    </div>
                    <div className="extend-shrink">
                    {activeTab !=1 ? <img className="plus-minus" src={plusSign} alt = "plus sign"></img> : <img className="plus-minus" src={minusSign} alt = "minus sign"></img>}
                    </div>
                </button >

                {renderActiveTab(1)}
                <button id = "2" onClick={ () => activeTab == 2 ? setActiveTab(-1) : setActiveTab(2)} className="selection-button">
                    <div className="select-logo">
                        <img className="logo-image" src={addPhoto} alt = "world-image"/>
                    </div>
                    <div className="select-text">
                        ADD LOGO IMAGE
                    </div>
                    <div className="extend-shrink">
                    {activeTab != 2 ? <img className="plus-minus" src={plusSign} alt = "plus sign"></img> : <img className="plus-minus" src={minusSign} alt = "minus sign"></img>}
                    </div>
                </button >

                {renderActiveTab(2)}
                <button id = "3" onClick={() => activeTab == 3 ? setActiveTab(-1) : setActiveTab(3)} className="selection-button">
                    <div className="select-logo">
                        <img className="logo-image" src={customizeLogo} alt = "world-image"/>
                    </div>
                    <div className="select-text">
                        CUSTOMIZE DESIGN
                    </div>
                    <div className="extend-shrink">
                    {activeTab != 3 ? <img className="plus-minus" src={plusSign} alt = "plus sign"></img> : <img className="plus-minus" src={minusSign} alt = "minus sign"></img>}
                    </div>
                </button >
                {renderActiveTab(3)}

            </div>
            <div className="qr-container">
                <div className="qr">
                    {qrCode}
                </div>
                <div className="qr-to-download" ref={qrRef}>
                    {qrToDownload}
                </div>
                <div className="qr-button-container">
                    <button className="qr-button bg-green" onClick={() => generateQRCode()}>Generate QR</button>
                    <button className="qr-button bg-blue" onClick={() => downloadQRCode()}>Download QR</button>
                </div>
            </div>
        </div>
    );
};

export default MainGenerator;