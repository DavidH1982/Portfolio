import "../App.css";
import ModalDiceGame from "./ProjectModalsImages/diceGameModalImage";
import ModalDrumkit from "./ProjectModalsImages/drumkitModalImage";

const Projects = () => {

    return (
        <>
        <div className="projectsPage">
            <div className="projectText">
                
            </div>
                <div className="modalContainer">
                    <div className="projectThumbnails">
                        <ModalDiceGame />
                    </div>
                    <div className="projectThumbnails">
                        <ModalDrumkit />
                    </div>
                    <div className="projectThumbnails">
                        <ModalDrumkit />
                    </div>
                    <div className="projectThumbnails">
                        <ModalDrumkit />
                    </div>
                    <div className="projectThumbnails">
                        <ModalDrumkit />
                    </div>
                    <div className="projectThumbnails">
                        <ModalDrumkit />
                    </div>                
                </div>
            </div>
        </>
    );
};

export default Projects;