import React from "react";


const AppStore = ({setUrl}) => {

    return <div className="url-content">
        <div>
            Your Url
        </div>
        <input className="url-input" type="text" placeHolder="https://play.google.com/" onChange={e => setUrl(e.target.value)} />
    </div>

}

export default AppStore