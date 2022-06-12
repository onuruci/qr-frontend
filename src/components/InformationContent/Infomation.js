import React from "react";
import "./Information.css"
import numberOne from "../images/number-one.png"
import numberTwo from "../images/number-2.png"
import numberThree from "../images/number-3.png"
import numberFour from "../images/number-four.png"

const Information = () => {

    return <div className="information-container" id="about">
        <div style={{ fontWeight: "bold" }}>
            GET STARTED
        </div>
        <div className="flex-row" style={{gap: "0.5rem"}}>
            <div className="bold-black-24">Create</div> <div className="normal-black-24">your</div> <div className="bold-black-24">custom QR Code </div> <div className="normal-black-24">with</div> <div className="bold-black-24">Logo </div>
        </div>
        <div className="flex-row" style={{ paddingTop: "2rem", gap: "4rem", alignItems: "flex-start" }}>
            <div className="step-section">
                <div className="normal-black-20 flex-row">
                    <img className="width-height-16" src={numberOne} alt="numberOneImage" ></img>

                    <div>
                        Set QR Content
                    </div>
                </div>

                <p style={{width: "15rem", fontSize: "16px", fontWeight: "500", color: "#5f676d"}}>
                Select a content type at the top for your QR code (URL, Text, Email...). After selecting your type you will see all available options. Enter all fields that should appear when scanning your QR code. Make sure everything you enter is correct because you can’t change the content once your QR code is printed.
                </p>
            </div>
            <div className="step-section">
                <div className="normal-black-20 flex-row">
                    <img className="width-height-16" src={numberTwo} alt="numberOneImage" ></img>
                    <div >
                        Customize Design
                    </div>
                </div>
                <p style={{width: "15rem", fontSize: "16px", fontWeight: "500", color: "#5f676d"}}>
                You want your QR code to look unique? Set a custom color and replace the standard shapes of your QR code. The corner elements and the body can be customized individually. Add a logo to your QR code. Select it from the gallery or upload your own logo image. You can also start with one of the templates from the template gallery. 
                </p>
            </div>
            <div className="step-section">
                <div className="normal-black-20 flex-row">
                    <img className="width-height-16" src={numberThree} alt="numberOneImage" ></img>
                    <div >
                        Generate QR Code
                    </div>
                </div>
                <p style={{width: "15rem", fontSize: "16px", fontWeight: "500", color: "#5f676d"}}>
                Set the pixel resolution of your QR code with the slider. Click the "Create QR Code"-button to see your qr code preview. Please make sure your QR code is working correctly by scanning the preview with your QR Code scanner. Use a high resolution setting if you want to get a png code with print quality. 
                </p>
            </div>
            <div className="step-section">
                <div className="normal-black-20 flex-row">
                    <img className="width-height-16" src={numberFour} alt="numberOneImage" ></img>
                    <div >
                        Download Image
                    </div>
                </div>
                <p style={{width: "15rem", fontSize: "16px", fontWeight: "500", color: "#5f676d"}}>
                    Now you can download the image files for your QR code as .png or .svg, .pdf, .eps vector graphic. If you want a vector format with the complete design please choose .svg. SVG is working in software like Adobe Illustrator or Inkscape. The logo and design settings currently only work for .png and .svg files. 
                </p>
            </div>
        </div>
    </div>

}

export default Information