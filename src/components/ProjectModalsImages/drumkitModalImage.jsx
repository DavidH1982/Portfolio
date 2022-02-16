import { useState } from "react";
import { Modal } from "react-responsive-modal";
import DrumkitModal from "../ProjectModalsModals/drumkitModalText";

const ModalDrumkit = () => {

    const [ open, setOpen ] = useState(false);

    return (
        <>
            <div onClick={()=> setOpen(true)}>
                <div className="projectThumbnails drumkitProject"/>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <DrumkitModal />
            </Modal>
        </>
    );
};

export default ModalDrumkit;