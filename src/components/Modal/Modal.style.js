import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
export const Backdrop = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const ModalBody = styled.div`
`
