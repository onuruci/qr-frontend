import React from "react";
import { useState } from "react";
import "./wifi.css"



const Wifi = ({ setUrl }) => {

    //console.log("re rendered");
    const [authentication, setAuthentication] = useState("WPA");   
    const [name, setName] = useState("");   
    const [password, setPassword] = useState("");

    const handleChange = (e) => {

        if(e.target.id ==="name"){
            setName(e.target.value);
            setUrl(`WIFI:T:${authentication};S:${e.target.value};${authentication !== 'no encyription' ? `P:${password};` : ''}H:${false};`);
        }
        if(e.target.id === "password"){
            setPassword(e.target.value)
            setUrl(`WIFI:T:${authentication};S:${name};${authentication !== 'no encyription' ? `P:${e.target.value};` : ''}H:${false};`);
        }
        if(e.target.id === "auth"){
            setAuthentication(e.target.value)
            setUrl(`WIFI:T:${e.target.value};S:${name};${e.target.value !== 'no encyription' ? `P:${password};` : ''}H:${false};`);
        }
    }

    return <form className="form-wrapper">
        
        <div className="label-input-pair">
            <label htmlFor="ssid name">Wireless SSID</label>
            <input id = "name" required={true} type="text" onChange={(e) => handleChange(e)}></input>
        </div>
        <div className="label-input-pair">
            <label htmlFor="password">Password</label>
            <input id = "password" required={true} type="password"  onChange={(e) => handleChange(e)}></input>
        </div>
        <div className="label-input-pair">
            <label htmlFor="authentication">Encyription</label>
            <select id = "auth" required={true} name="authentication" onChange={(e) => handleChange(e)}>
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