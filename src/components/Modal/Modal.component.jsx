import React from 'react';
import IconButton from '../IconButton';
import { Backdrop, ModalBody, ModalHeader, ModalWrapper } from './Modal.style';
import { ReactComponent as CloseIcon } from '../../icons/fechar.svg';

const Modal = ({onClose, children}) => (
  <Backdrop>
    <ModalWrapper>
      <ModalHeader>
        <IconButton onClick={onClose}>
          <CloseIcon width="20px" height="20px" />
        </IconButton>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </ModalWrapper>
  </Backdrop>
);

export default Modal;
