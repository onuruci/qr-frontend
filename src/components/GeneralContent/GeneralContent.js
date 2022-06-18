import React from "react";

const GeneralContent = ({setUrl}) => {

    return <div className="url-content">
        <div>
            Your Url
        </div>
        <input className="url-input" type="text" placeHolder="https://www.qrcode-lemon.com/" onChange={e => setUrl(e.target.value)} />
    </div>
}

export default GeneralContent

