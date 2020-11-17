import React from 'react';
import { useHistory } from 'react-router-dom';
import { ItemLabel } from './RouteListItem.style';

const RouteListItem = ({ to, label }) => {
  const history = useHistory();
  return (
    <ItemLabel
      onClick={() => {
        history.push(to);
      }}
    >
      {label}
    </ItemLabel>
  );
};

export default RouteListItem;
