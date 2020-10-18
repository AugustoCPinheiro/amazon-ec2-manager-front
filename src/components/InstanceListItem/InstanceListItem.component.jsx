import React from 'react';
import DataItem from '../DataItem';
import { Item } from './InstanceListItem.style';

const InstanceListItem = ({ Tags=[], InstanceType, State }) => (
  <Item>
    <DataItem label="Tipo da instancia" value={InstanceType} />
    <DataItem
      label="Nome"
      value={Tags.find((tag) => tag.Key === 'Name')?.Value}
    />
    <DataItem label="Status" value={State.Name} />
  </Item>
);

export default InstanceListItem;
