import React from "react";
import { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import './location.css';


const Location = ({setUrl}) => {

    const [locationUrl, setLocationUrl] = useState("http://maps.google.com/maps?q=42,21");
    const [longitude, setLongitude] = useState(42);
    const [latitude, setLatitude] = useState(21);

    const handleChange = (e) => {
        if(e.target.id === "longitude") {
            setLongitude(e.target.value);
            setLocationUrl(`http://maps.google.com/maps?q=${e.target.value},${latitude}`);
            setUrl(`http://maps.google.com/maps?q=${e.target.value},${latitude}`);
        } else if(e.target.id === "latitude") {
            setLatitude(e.target.value);
            setLocationUrl(`http://maps.google.com/maps?q=${longitude},${e.target.value}`);
            setUrl(`http://maps.google.com/maps?q=${longitude},${e.target.value}`);
        }
    };

    const handleLocationChange = (e) => {

    };

    return(
        <div>
            <div>
                <div className="loc-label-input loc-wide">
                    <label htmlFor="location_url" className="loc-label">Location URl</label>
                    <input id="location_url" required={true} type="text" value={locationUrl} className="loc-input" onChange={e => handleLocationChange(e)}></input>
                </div>
                <div className="loc-flex-row">
                    <div className="loc-label-input loc-narrow">
                        <label htmlFor="ssid name" className="loc-label">Longitude</label>
                        <input id = "longitude" required={true} type="number" value={longitude} className="loc-input" onChange={e => handleChange(e)}></input>
                    </div>
                    <div className="loc-label-input loc-narrow">
                        <label htmlFor="latitude" className="loc-label">Latitude</label>
                        <input id ="latitude" required={true} type="number" value={latitude} className="loc-input" onChange={e => handleChange(e)}></input>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;