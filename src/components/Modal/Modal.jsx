import React, { useEffect } from 'react';
import { ModalImage, ModalWrapper, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 }
};

const containerVariant = {
    initial: { scale: 0.5, x: '-50%', y: '0%' },
    isOpen: { scale: 1, x: '-50%', y: '-50%', transition: { type: "spring" } },
    exit: { scale: 0, x: '-50%', y: '0%' }
};

export const Modal = ({ closeModal, largeImage }) => {

    const closeModalByEsc = e => {
        if (e.code === 'Escape') {
            closeModal();
        }
    }
    const closeModalByOverlay = e => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", closeModalByEsc);
        document.body.classList.add('lock')
        return () => {
            window.removeEventListener("keydown", closeModalByEsc);
            document.body.classList.remove('lock')
        }
    })
    return (
        <Overlay onClick={closeModalByOverlay}
            initial={"initial"}
            animate={"isOpen"}
            exit={"exit"}
            variants={modalVariant}
        >
            <ModalWrapper variants={containerVariant}>
                <ModalImage src={largeImage} alt="large photo" />
            </ModalWrapper>
        </Overlay>
    );
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired
}