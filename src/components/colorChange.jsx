import React, { useState } from "react";
import "./ColorChange.css";

const ColorChange = () => {

const [ color, setColor ] = useState("grayBlack");

const colorChoice1 = async () => { setColor("grayBlack") }
const colorChoice2 = async () => { setColor("blackGray") }
const colorChoice3 = async () => { setColor("pinkBlue") }
const colorChoice4 = async () => { setColor("bluePink") }
const colorChoice5 = async () => { setColor("mintNavy") }
const colorChoice6 = async () => { setColor("navyMint") }
const colorChoice7 = async () => { setColor("yellowGray") }
const colorChoice8 = async () => { setColor("grayYellow") }
const colorChoice9 = async () => { setColor("greenGreen") }
const colorChoice10 = async () => { setColor("altGreen") }
const colorChoice11 = async () => { setColor("orangeBlack") }
const colorChoice12 = async () => { setColor("blackOrange") }
const colorChoice13 = async () => { setColor("sugarBeige") }
const colorChoice14 = async () => { setColor("beigeSugar") }
const colorChoice15 = async () => { setColor("blueSilver") }
const colorChoice16 = async () => { setColor("silverBlue") }
const colorChoice17 = async () => { setColor("purpleIce") }
const colorChoice18 = async () => { setColor("icePurple") }
const colorChoice19 = async () => { setColor("greenWhite") }
const colorChoice20 = async () => { setColor("whiteGreen") }
const colorChoice21 = async () => { setColor("pinkGray") }
const colorChoice22 = async () => { setColor("grayPink") }
const colorChoice23 = async () => { setColor("blackRed") }
const colorChoice24 = async () => { setColor("redBlack") }
const colorChoice25 = async () => { setColor("mojitoMoss") }
const colorChoice26 = async () => { setColor("mossMojito") }
const colorChoice27 = async () => { setColor("cherryWhite") }
const colorChoice28 = async () => { setColor("whiteCherry") }

    return (
    <>
        <div className={color === "grayBlack" ? "App grayBlack" :
                    color === "pinkBlue" ? "App pinkBlue" :
                    color === "mintNavy" ? "App mintNavy" :
                    color === "yellowGray" ? "App yellowGray" :
                    color === "greenGreen" ? "App greenGreen" :
                    color === "orangeBlack" ? "App orangeBlack" :
                    color === "blackGray" ? "App blackGray" :
                    color === "bluePink" ? "App bluePink" :
                    color === "navyMint" ? "App navyMint" :
                    color === "grayYellow" ? "App grayYellow" :
                    color === "altGreen" ? "App altGreen" :
                    color === "blackOrange" ? "App blackOrange" :
                    color === "sugarBeige" ? "App sugarBeige" :
                    color === "beigeSugar" ? "App beigeSugar" :
                    color === "blueSilver" ? "App blueSilver" :
                    color === "silverBlue" ? "App silverBlue" :
                    color === "purpleIce" ? "App purpleIce" :
                    color === "icePurple" ? "App icePurple" :
                    color === "greenWhite" ? "App greenWhite" :
                    color === "whiteGreen" ? "App whiteGreen" :
                    color === "pinkGray" ? "App pinkGray" :
                    color === "grayPink" ? "App grayPink" :
                    color === "blackRed" ? "App blackRed" :
                    color === "redBlack" ? "App redBlack" :
                    color === "mojitoMoss" ? "App mojitoMoss" :
                    color === "mossMojito" ? "App mossMojito" :
                    color === "cherryWhite" ? "App cherryWhite" :
                    color === "whiteCherry" && "App whiteCherry"}>
            <div colorChangeContainer>
                <ul className='colorChange'>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice1' onClick={()=> colorChoice1()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice2' onClick={()=> colorChoice2()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice3' onClick={()=> colorChoice3()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice4' onClick={()=> colorChoice4()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice5' onClick={()=> colorChoice5()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice6' onClick={()=> colorChoice6()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice7' onClick={()=> colorChoice7()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice8' onClick={()=> colorChoice8()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice9' onClick={()=> colorChoice9()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice10' onClick={()=> colorChoice10()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice11' onClick={()=> colorChoice11()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice12' onClick={()=> colorChoice12()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice13' onClick={()=> colorChoice13()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice14' onClick={()=> colorChoice14()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice15' onClick={()=> colorChoice15()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice16' onClick={()=> colorChoice16()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice17' onClick={()=> colorChoice17()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice18' onClick={()=> colorChoice18()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice19' onClick={()=> colorChoice19()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice20' onClick={()=> colorChoice20()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice21' onClick={()=> colorChoice21()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice22' onClick={()=> colorChoice22()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice23' onClick={()=> colorChoice23()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice24' onClick={()=> colorChoice24()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice25' onClick={()=> colorChoice25()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice26' onClick={()=> colorChoice26()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice27' onClick={()=> colorChoice27()}></div></li>
                <li className='colorChoice'><div className='colorChoiceCircle colorChoice28' onClick={()=> colorChoice28()}></div></li>
                </ul>
            </div>
            </div>
        </>
    );
}

export default ColorChange;