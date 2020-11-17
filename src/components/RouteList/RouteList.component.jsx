import React from 'react';
import RouteListItem from '../RouteListItem';
import { List } from './RouteList.style';

const RouteList = ({ routes = [] }) => (
  <List>
    {routes.map(({ to, label }) => (
      <RouteListItem to={to} label={label} />
    ))}
  </List>
);

export default RouteList;
