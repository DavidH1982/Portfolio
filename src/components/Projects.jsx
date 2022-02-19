import "../App.css";
import { useState } from "react";

const Projects = () => {

    const [modal1, setModal1] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [modal3, setModal3] = useState(false)
    const [modal4, setModal4] = useState(false)
    const [modal5, setModal5] = useState(false)
    const [modal6, setModal6] = useState(false)



    return (
        <>
            <div className="projectsPage">
                <div className="projectText">
                    
                </div>
                <div className="modalContainer">
                    <div className="projectThumbnails diceGameThumbnail" onClick={()=> setModal1(true)} />
                    <div className="projectThumbnails drumkitThumbnail" onClick={()=> setModal2(true)} />
                    <div className="projectThumbnails genericThumbnail thumbnail3"  onClick={()=> setModal3(true)} />
                    <div className="projectThumbnails genericThumbnail thumbnail4"  onClick={()=> setModal4(true)} />
                    <div className="projectThumbnails genericThumbnail thumbnail5"  onClick={()=> setModal5(true)} />
                    <div className="projectThumbnails genericThumbnail thumbnail6"  onClick={()=> setModal6(true)} />               
                </div>
                <div className="popupContainer">
                    <div className={modal1 === false ? "modalHidden" : "modalShown modal modal1"}><button onClick={()=> setModal1(false)}></button></div>
                    <div className={modal2 === false ? "modalHidden" : "modalShown modal modal2"}><button onClick={()=> setModal2(false)}></button></div>
                    <div className={modal3 === false ? "modalHidden" : "modalShown modal modal3"}><button onClick={()=> setModal3(false)}></button></div>
                    <div className={modal4 === false ? "modalHidden" : "modalShown modal modal4"}><button onClick={()=> setModal4(false)}></button></div>
                    <div className={modal5 === false ? "modalHidden" : "modalShown modal modal5"}><button onClick={()=> setModal5(false)}></button></div>
                    <div className={modal6 === false ? "modalHidden" : "modalShown modal modal6"}><button onClick={()=> setModal6(false)}></button></div>
                </div>
            </div>
        </>
    );
};

export default Projects;