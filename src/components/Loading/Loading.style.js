import styled, { keyframes } from 'styled-components/macro';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  bottom: -11px;
`;

const translate = keyframes`
  from {
    transform: translate(0)
  }

  to {
    transform: translate(100vw)
  }
`;

export const Line = styled.div`
  height: 100%;
  width: 10%;
  background-color: #Da5552;
  animation: ${translate} 1.1s linear infinite;
`;
