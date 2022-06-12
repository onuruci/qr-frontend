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
    const [foregroundColor, setForegroundColor] = useState("#000000");
    const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
    const [selectedImage, setSelectedImage] = useState();
    

    const normalColor = "#141926";
    const lightColor = "#9fb2c0";

    const qrCode = (
        <QRCode

            id="qrCodeElToRender"
            size={350}
            value={urlToDownload}
            bgColor={backgroundColor}
            fgColor={foregroundColor}
            imageSettings={{
                src: selectedImage,
                excavate: true,
                width: 350 * 0.1,
                height: 350 * 0.1,
              }}
            level="Q"
            includeMargin
        />
    );

    const qrToDownload = (
        <QRCode
            id="qrCodeElToRender"
            size={1200}
            value={urlToDownload}
            bgColor={backgroundColor}
            fgColor={foregroundColor}
            level="Q"
            imageSettings={{
                src: selectedImage,
                excavate: true,
                width: 1200 * 0.1,
                height: 1200 * 0.1,
              }}
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
        let tempColor = foregroundColor
        setForegroundColor(lightColor);
        setTimeout(() => {
            setForegroundColor(tempColor);
            setUrlToDownload(url);
        }, 1000);
    };

    const handleSelectedInput = (e) => {
        const [file] = e.target.files;
        setSelectedImage(URL.createObjectURL(file));
    }

    const removeImage = (e) => {

        e.target.value = null;
        setSelectedImage();
    }


    const renderActiveTab = (val) => {

        if (val == activeTab) {

            if (val == 0) {

                return <div className="url-content">
                    <div>
                        Your Url
                    </div>

                    <input className="url-input" type="text" placeholder="https://www.qrcode-lemon.com/" value={url} onChange={e => setUrl(e.target.value)} />
                </div>  

            }


            else if (val == 1) {
                return <div className="color-content">
                    <div className="color-div">
                        <div>
                            Foreground Color
                        </div>
                        <div className="color-change">
                            <input className="foreground-color-input" type="color" value={foregroundColor} onChange={e => setForegroundColor(e.target.value)} />
                            <div className="color-text">
                                {foregroundColor}
                            </div>
                        </div>
                    </div>
                    <div className="color-div">
                        <div>
                            Background Color
                        </div>
                        <div className="color-change">
                            <input className="background-color-input" type="color" value={backgroundColor} onChange={e => setBackgroundColor(e.target.value)} />
                            <div className="color-text">
                                {backgroundColor}
                            </div>
                        </div>
                    </div>
                </div>
            }
            else if (val == 2) {
                return <div className="select-image-container">

                    <div className="selected-image-view">
                        <img className="selected-image-src" src = {selectedImage ? selectedImage : null}></img>
                    </div>

                    <div className="load-remove-container">
                        <input className="select-image" id="select-image" type="file" name="logo-image" onChange={(e) => handleSelectedInput(e)} accept="image/*" />
                        <button className="load-image-button" id="loadLogo" onClick={() => document.getElementById('select-image').click()}>LOAD IMAGE</button>
                        <button className="load-image-button remove-special" id = "removeImage" onClick={(e) => removeImage(e)}>REMOVE IMAGE</button>
                    </div>
                </div>
            }

        }

    }

    return (
        <div className="main-generator">



            <div className="qr-editor">
                <button id="0" onClick={() => activeTab == 0 ? setActiveTab(-1) : setActiveTab(0)} className="selection-button tab0">
                    <div className="select-logo">
                        <img className="logo-image" src={selectLogo} alt="world-image" />
                    </div>
                    <div className="select-text">
                        ENTER CONTENT
                    </div>
                    <div className="extend-shrink">
                        {activeTab != 0 ? <img className="plus-minus" src={plusSign} alt="plus sign"></img> : <img className="plus-minus" src={minusSign} alt="minus sign"></img>}
                    </div>
                </button>

                {renderActiveTab(0)}

                <button id="1" onClick={() => activeTab == 1 ? setActiveTab(-1) : setActiveTab(1)} className="selection-button tab1">
                    <div className="select-logo">
                        <img className="logo-image" src={colorPalette} alt="world-image" />
                    </div>
                    <div className="select-text">
                        SET COLORS
                    </div>
                    <div className="extend-shrink">
                        {activeTab != 1 ? <img className="plus-minus" src={plusSign} alt="plus sign"></img> : <img className="plus-minus" src={minusSign} alt="minus sign"></img>}
                    </div>
                </button >

                {renderActiveTab(1)}
                <button id="2" onClick={() => activeTab == 2 ? setActiveTab(-1) : setActiveTab(2)} className="selection-button tab2">
                    <div className="select-logo">
                        <img className="logo-image" src={addPhoto} alt="world-image" />
                    </div>
                    <div className="select-text">
                        ADD LOGO IMAGE
                    </div>
                    <div className="extend-shrink">
                        {activeTab != 2 ? <img className="plus-minus" src={plusSign} alt="plus sign"></img> : <img className="plus-minus" src={minusSign} alt="minus sign"></img>}
                    </div>
                </button >

                {renderActiveTab(2)}
                <button id="3" onClick={() => activeTab == 3 ? setActiveTab(-1) : setActiveTab(3)} className="selection-button tab3">
                    <div className="select-logo">
                        <img className="logo-image" src={customizeLogo} alt="world-image" />
                    </div>
                    <div className="select-text">
                        CUSTOMIZE DESIGN
                    </div>
                    <div className="extend-shrink">
                        {activeTab != 3 ? <img className="plus-minus" src={plusSign} alt="plus sign"></img> : <img className="plus-minus" src={minusSign} alt="minus sign"></img>}
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