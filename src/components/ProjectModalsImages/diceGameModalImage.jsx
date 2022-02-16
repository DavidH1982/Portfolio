import { useState } from "react";
import { Modal } from "react-responsive-modal";
import DiceGameModal from "../ProjectModalsModals/diceGameModalText";

const ModalDiceGame = () => {

    const [ open, setOpen ] = useState(false);

    return (
        <>
            <div onClick={()=> setOpen(true)}>
                <div className="projectThumbnails dicegameProject" />
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <DiceGameModal />
            </Modal>
        </>
    );
};

export default ModalDiceGame;