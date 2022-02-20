import "./Projects.scss";
import { useState } from "react";

const Projects = () => {

    const [modal1, setModal1] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [modal3, setModal3] = useState(false)
    const [modal4, setModal4] = useState(false)
    const [modal5, setModal5] = useState(false)
    const [modal6, setModal6] = useState(false)

    const modal1Open = () => {
        setModal1(true)
        setModal2(false)
        setModal3(false)
        setModal4(false)
        setModal5(false)
        setModal6(false)
    }
    const modal2Open = () => {
        setModal1(false)
        setModal2(true)
        setModal3(false)
        setModal4(false)
        setModal5(false)
        setModal6(false)
    }
    const modal3Open = () => {
        setModal1(false)
        setModal2(false)
        setModal3(true)
        setModal4(false)
        setModal5(false)
        setModal6(false)
    }
    const modal4Open = () => {
        setModal1(false)
        setModal2(false)
        setModal3(false)
        setModal4(true)
        setModal5(false)
        setModal6(false)
    }
    const modal5Open = () => {
        setModal1(false)
        setModal2(false)
        setModal3(false)
        setModal4(false)
        setModal5(true)
        setModal6(false)
    }
    const modal6Open = () => {
        setModal1(false)
        setModal2(false)
        setModal3(false)
        setModal4(false)
        setModal5(false)
        setModal6(true)
    }

    return (
        <>
            <div className="projectsPage">
                <div className={modal6 === true ? "projectText blurry" :
                                modal5 === true ? "projectText blurry" :
                                modal4 === true ? "projectText blurry" :
                                modal3 === true ? "projectText blurry" :
                                modal2 === true ? "projectText blurry" :
                                modal1 === true ? "projectText blurry" :
                                "projectText"}>
                    
                </div>
                <div className={modal6 === true ? "modalContainer blurry" :
                                modal5 === true ? "modalContainer blurry" :
                                modal4 === true ? "modalContainer blurry" :
                                modal3 === true ? "modalContainer blurry" :
                                modal2 === true ? "modalContainer blurry" :
                                modal1 === true ? "modalContainer blurry" :
                                "modalContainer"}>
                    <div className="projectThumbnails mandcCloneThumbnail" onClick={()=> modal1Open()}>
                        <div className="thumbnail1-border" />
                    </div>
                    <div className="projectThumbnails keycodeThumbnail" onClick={()=> modal2Open()}>
                        <div className="thumbnail2-border1" />
                        <div className="thumbnail2-border2" />
                    </div>
                    <div className="projectThumbnails drumkitThumbnail"  onClick={()=> modal3Open()} />
                    <div className="projectThumbnails diceGameThumbnail"  onClick={()=> modal4Open()} />
                    <div className="projectThumbnails thumbnail5"  onClick={()=> modal5Open()}>
                    </div>
                    <div className="projectThumbnails groupProjectThumbnail"  onClick={()=> modal6Open()} />               
                </div>
                <div className="popupContainer">
                    <div className={modal1 === false ? "modalHidden" : "modalShown modal modal1"}>
                        <button onClick={()=> setModal1(false)}>X</button>
                        <div>
                            <h2>
                                Website Clone Challenge
                            </h2>
                            <p>
                                The very first challenge given to us during the CodeNation Master 
                                Coding Bootcamp was to clone a website. I chose the Miller&amp;Carter
                                Lytham St.Annes website, as I had previously worked there for 4 years,
                                and it felt like an homage! <br/>
                                <hr />
                                This clone is in pure HTML and CSS, there is no functionality, and there
                                are no media queries. <br />
                                <hr />
                                To view the original website, click <a href="https://www.millerandcarter.co.uk/restaurants/north-west/millerandcarterlythamstannes#"
                                target="_blank" rel="noreferrer">here</a>. This challenge was set in the lead up
                                to Christmas 2021, so the content will be slightly different.
                                <hr />
                            </p>
                            <a href="https://davidh1982.github.io/Website-Clones/" target="_blank" rel="noreferrer">
                                Click here to see full size
                            </a>
                        </div>
                    </div>
                    <div className={modal2 === false ? "modalHidden" : "modalShown modal modal2"}>
                        <button onClick={()=> setModal2(false)}>X</button>
                        <div>
                            <h2>
                                Key Code Challenge
                            </h2>
                            <p>
                                This challenge was given to be evidence of our understanding of the JS DOM and
                                using event listeners to apply changes to the DOM in response to user interaction. <br />
                                <hr />
                                The brief was to creat a keycode generator, so that on the press of any key the browser
                                will show the event.key, the event.code, and the event.which. <br />
                                <hr />
                                This simple site is pure HTML and CSS, with no media queries. It is styled using
                                flexbox, and so is mobile friendly to a degree.
                                <hr />
                            </p>
                            <a href="https://davidh1982.github.io/Keycode-Challenge/" target="_blank" rel="noreferrer">
                                Click here to see full size
                            </a>
                        </div>
                    </div>
                    <div className={modal3 === false ? "modalHidden" : "modalShown modal modal3"}>
                        <button onClick={()=> setModal3(false)}>X</button>
                        <div>
                            <h2>
                                Drumkit Challenge
                            </h2>
                            <p>
                                The brief for this challenge was an extension of the Key Code Challenge. <br />
                                <hr />
                                The task was that when a key was pressed, or a key clicked, play a sound.
                                I chose to use the keypad numbers for the key press function, so that users
                                can play all the sounds without moving their hand. I realised that the downside
                                to this could be that not all laptops have a keypad. <br />
                                <hr />
                                The styling was left entirely to me, but I was asked as a bonus task to implement
                                the <a href="https://animejs.com/" target="_blank" rel="noreferrer"> anime.js </a>
                                library.
                                <hr />
                            </p>
                            <a href="https://davidh1982.github.io/Numpad-Drumkit/" target="_blank" rel="noreferrer">
                                Click here to see full size
                            </a>
                        </div>
                        </div>
                    <div className={modal4 === false ? "modalHidden" : "modalShown modal modal4"}>
                        <button onClick={()=> setModal4(false)}>X</button>
                        <div>
                            <h2>
                                Dice Game Challenge
                            </h2>
                            <p>
                                
                            </p>
                            <a href="https://davidh1982.github.io/Dice-Game/" target="_blank" rel="noreferrer">
                                Click here to see full size
                            </a>
                        </div>
                        </div>
                    <div className={modal5 === false ? "modalHidden" : "modalShown modal modal5"}>
                        <button onClick={()=> setModal5(false)}>X</button>
                        <div>
                            <h2>
                                Drumkit Challenge
                            </h2>
                            <p>
                                
                            </p>
                            <a href="https://davidh1982.github.io/Numpad-Drumkit/" target="_blank" rel="noreferrer">
                                Click here to see full size
                            </a>
                        </div>
                        </div>
                    <div className={modal6 === false ? "modalHidden" : "modalShown modal modal6"}>
                        <button onClick={()=> setModal6(false)}>X</button>
                        <div>
                            <h2>
                                Group Project
                            </h2>
                            <p>
                                This was the final project from CodeNation and the first project 
                                performed as a group. We were given 2 weeks to complete and a selection
                                of briefs to choose from, as a team we chose an original idea. <br />
                                <hr />
                                My first job was to implement a dark mode feature, which I acheived by
                                using the <a href="https://chakra-ui.com/" target="_blank" rel="noreferrer">
                                chakra-ui library</a>. This was simple and effective, however brought
                                an issue during the second week of the project as chakra-ui had a complete
                                update meaning none of the reference code worked anymore! <br />
                                <hr />
                                Next, I worked on the styling of the navigation bar, the "Musisphere"
                                page, and the media queries. <br/>
                                We worked remotely, using <a href="https://github.com" target="_blank"
                                rel="noreferrer">GitHub</a> to merge our work, <a href="https://www.heroku.com/home"
                                target="_blank" rel="noreferrer"> Heroku </a> platform for backend database, and
                                <a href="https://www.netlify.com/" target="_blank" rel="noreferrer"> Netlify </a>
                                to deploy the frontend. <br />
                                <hr />
                                The main experiences that I embraced from this experience are that working
                                remotely relies on clear communication, the importance of naming conventions
                                is even more valid when more than 1 person is working on the CSS, never assume
                                that if there is an error it is someone else's fault, and a deadline is never 
                                as far away as it first feels!
                                <hr />
                            </p>
                            <a href="https://inspiring-sammet-925ed2.netlify.app/" target="_blank" rel="noreferrer">
                                Click here to see the app in full.
                            </a>
                        </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Projects;