import React from 'react';
import useUpdateInstance from '../../hooks/ec2/useUpdateInstance';
import IconButton from '../IconButton';
import { ActionWrapper, InfoWrapper, InstanceDataItem, Item } from './InstanceListItem.style';
import { ReactComponent as StopIcon } from '../../icons/botao-de-energia.svg';
import { ReactComponent as StartIcon } from '../../icons/poder.svg';
import { ReactComponent as SkullIcon } from '../../icons/cranio.svg'
import useTerminateInstance from '../../hooks/ec2/useTerminateInstance';

const InstanceListItem = ({ Tags=[], InstanceType, State, InstanceId }) => {
  const { updateInstance } = useUpdateInstance();
  const { terminateInstance } = useTerminateInstance();

  const onUpdateInstance = (action) => () => {
    updateInstance({ ids: [InstanceId], action });
  };

  const renderButton = (statusCode) => {
    switch (statusCode) {
      case 80:
        return (
          <IconButton onClick={onUpdateInstance('START')}>
            <StartIcon width="20px" height="20px" />
          </IconButton>
        );
      case 16:
        return (
          <IconButton onClick={onUpdateInstance('STOP')}>
            <StopIcon width="20px" height="20px" />
          </IconButton>
        );
      default:
        return <></>;
    }
  };

  return (
    <Item>
      <InfoWrapper>
        <InstanceDataItem label="Id" value={InstanceId} />

        <InstanceDataItem label="Tipo da instancia" value={InstanceType} />
        <InstanceDataItem
          label="Nome"
          value={Tags.find((tag) => tag.Key === 'Name')?.Value}
        />
        <InstanceDataItem label="Status" value={State.Name} />
      </InfoWrapper>
      <ActionWrapper>
        {renderButton(State.Code)}
        <IconButton
          onClick={() => {
            terminateInstance({ id: InstanceId });
          }}
        >
          <SkullIcon width="20px" height="20px" />
        </IconButton>
      </ActionWrapper>
    </Item>
  );
};

export default InstanceListItem;
