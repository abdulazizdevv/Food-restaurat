import React, { useRef } from "react";
import "./index.css"
import {
    ModalBtn,
    ModalContent,
    ModalHeader,
    ModalTitle,
    ModalWrapper,
    OverlayDiv,
} from "./modal.style";

export const Modal = ({ modal, setModal, children, title }) => {
    const overleyRef = useRef();
    const handleOvarley = (evt) => {
        if (evt.target === overleyRef.current) {
            setModal(false);
        }
    };
    return (
        <OverlayDiv   ref={overleyRef}
        onClick={(evt) => handleOvarley(evt)}
        className={`overlay ${modal ? "open" : ""}`}>
            <ModalWrapper>
                <ModalBtn  onClick={() => setModal(false)}
                    className=" modal-button" > &times; </ModalBtn>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                </ModalHeader>
                <ModalContent>{children}</ModalContent>
            </ModalWrapper>
        </OverlayDiv>
    );
};
