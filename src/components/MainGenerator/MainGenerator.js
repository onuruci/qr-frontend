import React from "react";
import { useState} from "react";
import QRCode from "qrcode.react";
import './MainGenerator.css'
import selectLogo from "../images/earth-globe-with-continents-maps.png"
import colorPalette from "../images/paint-board-and-brush.png"
import addPhoto from "../images/photo.png"
import customizeLogo from "../images/customize.png"
import plusSign from "../images/plus.png";
import minusSign from "../images/minus.png"
import Wifi from "../WifiQrCode";
import GeneralContent from "../GeneralContent";
import ImageContent from "../CustomizeStyle/ImageChanges/ImageContent";
import ColorContent from "../CustomizeStyle/ColorChanges/ColorContent";
import ActiveTabContent from "../ActiveTabContent";

const MainGenerator = () => {

    const [url, setUrl] = useState("");
    const [urlToDownload, setUrlToDownload] = useState("https://www.qrcode-lemon.com/");
    const qrRef = React.useRef();
    const [activeTab, setActiveTab] = useState(0);
    const [foregroundColor, setForegroundColor] = useState("#000000");
    const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedDisplayImage, setSelectedDisplayImage] = useState("");
    const [QRType, setQRType] = useState("URL")

    const lightColor = "#9fb2c0";

    const qrCode = (
        <QRCode

            id="qrCodeElToRender"
            size={350}
            value={urlToDownload}
            bgColor={backgroundColor}
            fgColor={foregroundColor}
            imageSettings={{
                src: selectedDisplayImage,
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
                src: selectedDisplayImage,
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
            setSelectedDisplayImage(selectedImage);
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

                if(QRType == "URL"){

                    return <GeneralContent setUrl = {setUrl}></GeneralContent>
                }
                else if(QRType == "WIFI"){
                    return <Wifi  setUrl={setUrl} ></Wifi>
                }

            }


            else if (val == 1) {
                return <div className="color-content">
                    <ColorContent type = "fore" c = {foregroundColor} sc = {setForegroundColor}></ColorContent>
                    <ColorContent type = "back" c = {backgroundColor} sc = {setBackgroundColor}></ColorContent>
                </div>
            }
            else if (val == 2) {
                return <ImageContent selectedImage={selectedImage} removeImage = {removeImage} handleSelectedInput = {handleSelectedInput} ></ImageContent>
            }

        }

    }

    return (

        <div className="main-wrapper">
            <div className="select-qr-type">
                <button className={QRType === "URL" ? "selected-qr-type" : ""} onClick={(e) => setQRType("URL")}>
                    URL
                </button>
                <button className={QRType === "WIFI" ? "selected-qr-type" : ""} onClick={(e) => setQRType("WIFI")}>
                    WIFI
                </button>
                <button className={QRType === "LOCATION" ? "selected-qr-type" : ""} onClick={(e) => setQRType("LOCATION")}>
                    LOCATION
                </button>
                <button className={QRType === "APP STORE" ? "selected-qr-type" : ""} onClick={(e) => setQRType("APP STORE")}>
                    APP STORE
                </button>
            </div>
            <div className="main-generator">
                <div className="qr-editor">
                    <ActiveTabContent id = "0" activeTab = {activeTab} plusSign = {plusSign} minusSign = {minusSign} selectLogo = {selectLogo} setActiveTab = {setActiveTab}></ActiveTabContent>
                    {renderActiveTab(0)}

                    <ActiveTabContent id = "1" activeTab = {activeTab} plusSign = {plusSign} minusSign = {minusSign} selectLogo = {selectLogo} setActiveTab = {setActiveTab}></ActiveTabContent>

                    {renderActiveTab(1)}
                    <ActiveTabContent id = "2" activeTab = {activeTab} plusSign = {plusSign} minusSign = {minusSign} selectLogo = {selectLogo} setActiveTab = {setActiveTab}></ActiveTabContent>

                    {renderActiveTab(2)}
                    <ActiveTabContent id = "3" activeTab = {activeTab} plusSign = {plusSign} minusSign = {minusSign} selectLogo = {selectLogo} setActiveTab = {setActiveTab}></ActiveTabContent>
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
                        <button className="qr-button bg-green"  onClick={() => generateQRCode()}>Generate QR</button>
                        <button className="qr-button bg-blue" onClick={() => downloadQRCode()}>Download QR</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainGenerator;