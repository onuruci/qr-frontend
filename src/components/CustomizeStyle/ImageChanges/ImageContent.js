import React from "react";


const ImageContent = ({selectedImage, removeImage, handleSelectedInput}) => {

    return <div className="select-image-container">

    <div className="selected-image-view">
        <img className="selected-image-src" src={selectedImage ? selectedImage : null}></img>
    </div>

    <div className="load-remove-container">
        <input className="select-image" id="select-image" type="file" name="logo-image" onChange={(e) => handleSelectedInput(e)} accept="image/*" />
        <button className="load-image-button" id="loadLogo" onClick={() => document.getElementById('select-image').click()}>LOAD IMAGE</button>
        {selectedImage ? <button className="load-image-button remove-special" id="removeImage" onClick={(e) => removeImage(e)}>REMOVE IMAGE</button> : null}
    </div>
</div>

}   

export default ImageContent