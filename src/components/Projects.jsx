import "../App.css";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import ModalDiceGame from "./ProjectModalsImages/diceGameModalImage";

const Projects = () => {

    const [ open, setOpen ] = useState(false);

    return (
        <>
        <div className="projectsPage">
            <div className="projectText">
                
            </div>
            <div className="iframeContainer">
                <ModalDiceGame />
                <div className="projectThumbnails drumkitProject" />
                <div className="projectThumbnails drumkitProject" />
                <div className="projectThumbnails drumkitProject" />
                <div className="projectThumbnails drumkitProject" />
                <div className="projectThumbnails drumkitProject" />
                {/* <a href="https://davidh1982.github.io/Dice-Game/" target="_blank" className="projectThumbnails dicegameProject"></a>
                <a href="https://davidh1982.github.io/Numpad-Drumkit/" target="_blank" className="projectThumbnails drumkitProject"></a>
                <a href="https://davidh1982.github.io/Numpad-Drumkit/" target="_blank" className="projectThumbnails drumkitProject"></a>
                <a href="https://davidh1982.github.io/Numpad-Drumkit/" target="_blank" className="projectThumbnails drumkitProject"></a>
                <a href="https://davidh1982.github.io/Numpad-Drumkit/" target="_blank" className="projectThumbnails drumkitProject"></a>
                <a href="https://davidh1982.github.io/Numpad-Drumkit/" target="_blank" className="projectThumbnails drumkitProject"></a> */}
            </div>
        </div>
        </>
    );
};

export default Projects;