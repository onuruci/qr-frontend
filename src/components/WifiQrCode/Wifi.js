import React from "react";
import { useState } from "react";
import "./wifi.css"



const Wifi = ({ setAuthentication, setName,setPassword }) => {

    console.log("re rendered");

    return <form className="form-wrapper">
        
        <div className="label-input-pair">
            <label htmlFor="ssid name">Wireless SSID</label>
            <input id = "name" required={true} type="text" onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="label-input-pair">
            <label htmlFor="password">Password</label>
            <input id = "password" required={true} type="text"  onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div className="label-input-pair">
            <label htmlFor="authentication">Encyription</label>
            <select id = "auth" required={true} name="authentication" onChange={(e) => setAuthentication(e.target.value)}>
                <option value="WPA">
                    WPA/WPA2
                </option>
                <option value="WEP">
                    WEP
                </option>
                <option value="no encyription">
                    no encyription
                </option>
            </select>
        </div>
    </form>
}


export default Wifi;