import React from "react";

const ActiveTabContent = ({id, plusSign, activeTab, setActiveTab, selectLogo, minusSign}) => {
    return <button id={id} onClick={() => activeTab == id ? setActiveTab(-1) : setActiveTab(id)} className="selection-button">
        <div className="select-logo">
            <img className="logo-image" src={selectLogo} alt="" />
        </div>
        <div className="select-text">
            {id == 0 ? "ENTER CONTENT" : id == 1 ? "SET COLORS" : id == 2 ? "ADD LOGO IMAGE" : "CUSTOMIZE DESIGN"}
        </div>
        <div className="extend-shrink">
            {activeTab != id ? <img className="plus-minus" src={plusSign} alt="plus sign"></img> : <img className="plus-minus" src={minusSign} alt="minus sign"></img>}
        </div>
    </button>
}
export default ActiveTabContent