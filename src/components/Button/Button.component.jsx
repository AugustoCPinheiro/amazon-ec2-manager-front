import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
