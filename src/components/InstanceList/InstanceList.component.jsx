import React from 'react';
import useCreateInstance from '../../hooks/useCreateInstance';
import Button from '../Button';
import InstanceListItem from '../InstanceListItem';
import { List, ListHeader, ListWrapper } from './InstanceList.style';



const InstanceList = ({ instances = [] }) => {
  const {createInstance} = useCreateInstance(() => {console.log("sucesso")})
  const instantiateAWSEC2 = () => {
    createInstance()
  };

  return (
  <ListWrapper>
    <ListHeader>
      <Button onClick={instantiateAWSEC2}>Adicionar</Button>
    </ListHeader>
    <List>
      {instances.map((curr, index) => (
        <InstanceListItem key={index} {...curr}/>
      ))}
    </List>
  </ListWrapper>
)};
export default InstanceList;
