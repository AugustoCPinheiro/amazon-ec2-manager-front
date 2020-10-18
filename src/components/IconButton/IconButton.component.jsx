import React from 'react';
import { StyledButton } from './IconButton.style';

const IconButton = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default IconButton;
