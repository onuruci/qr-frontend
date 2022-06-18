import React from "react";


const ColorContent = ({type, c, sc}) =>  {

    return <div className="color-div">
    <div>
        {type == "fore" ? "Foreground Color" : "Background Color"}
    </div>
    <div className="color-change">
        <input className="foreground-color-input" type="color" value={c} onChange={e => sc(e.target.value)} />
        <div className="color-text">
            {c}
        </div>
    </div>
</div>

}

export default ColorContent