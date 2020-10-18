import React from 'react';
import useUpdateInstance from '../../hooks/useUpdateInstance';
import DataItem from '../DataItem';
import IconButton from '../IconButton';
import { Item } from './InstanceListItem.style';
import { ReactComponent as StopIcon } from '../../icons/botao-de-energia.svg';
import { ReactComponent as StartIcon } from '../../icons/poder.svg';


const InstanceListItem = ({ Tags=[], InstanceType, State, InstanceId }) => {
  const { updateInstance } = useUpdateInstance(() => console.log("success"));

  const onUpdateInstance = (action) => () => {
    updateInstance({ ids: [InstanceId], action })
  }
  const renderButton = (statusCode) => {
    switch (statusCode) {
      case 80:
        return (
          <IconButton onClick={onUpdateInstance('START')}>
            <StartIcon width="24px" height="24px" />
          </IconButton>
        );
      case 16:
        return (
          <IconButton onClick={onUpdateInstance('STOP')}>
            <StopIcon width="24px" height="24px" />
          </IconButton>
        );
      default:
        return <></>;
    }
  }
  return (
    <Item>
      <DataItem label="Id" value={InstanceId} />

      <DataItem label="Tipo da instancia" value={InstanceType} />
      <DataItem
        label="Nome"
        value={Tags.find((tag) => tag.Key === 'Name')?.Value}
      />
      <DataItem label="Status" value={State.Name} />
      
      {renderButton(State.Code)}
    </Item>
  );
};

export default InstanceListItem;
