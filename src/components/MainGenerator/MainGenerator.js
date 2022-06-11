import React from "react";
import { useState, useRef } from "react";
import QRCode from "qrcode.react";
import './MainGenerator.css'

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
        setUrl("");
    };

    return(
        <div id="main-generator">
            <div className="qr-editor">
                <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
            </div>
            <div className="qr-container">
                <div className="qr" ref={qrRef}>
                    {qrCode}
                </div>
                <button onClick={() => downloadQRCode() }>Download QR</button>
            </div>
        </div>
    );
};

export default MainGenerator;