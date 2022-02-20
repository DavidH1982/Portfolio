import React from "react";
import "./Aboutme.css";
import { useState } from "react";

const Aboutme = () => {

    const [ linkopen, setLinkopen ] = useState(false)

    return (
        <>
        <div className="aboutmePage">
            <h1>About Me</h1>
            <div className={linkopen === true ? "aboutmePictureScale blurry" : "aboutmePictureScale"}>
                <div className="aboutmeFrame">
                    <div className="aboutmeBorder">
                        <div className="aboutmePhoto">
                        </div>
                    </div>
                </div>
            </div>
            <div className="linkDiv">
            <button className="modelLink" onClick={()=> setLinkopen(true)}>3D Models</button>
            </div>
            <div className={linkopen === true ? "Aboutme_3DModelling open" : "hidden"}>
            <div className="closeButton">
                <button className="modellingCloser" onClick={()=> setLinkopen(false)}>Close</button>
            </div>
        </div>
        </div>
        
        </>
    );
};

export default Aboutme;