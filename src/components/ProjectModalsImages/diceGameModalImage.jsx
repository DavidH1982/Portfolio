import "../App.css";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import DiceGameModal from "../ProjectModalsModals/diceGameModalText";

const ModalDiceGame = () => {

    const [ open, setOpen ] = useState(false);

    return (
        <>
            <div className="iframeContainer">
                <div className="projectThumbnails dicegameProject" onClick={()=> setOpen(true)}/>
            </div>
            <Modal open={open} onClose={()=> setOpen(false)}>
                <DiceGameModal />
            </Modal>
        </>
    );
};

export default ModalDiceGame;