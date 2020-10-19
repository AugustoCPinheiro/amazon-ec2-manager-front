import styled from 'styled-components';
import DataItem from '../DataItem';

export const Item = styled.li`
  background-color: white;
  padding: 20px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 6px 7px 14px -5px rgba(0, 0, 0, 0.42);
  border-radius: 5px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 80%;
  flex-wrap: wrap;
`;
export const ActionWrapper = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: flex-end;
  button:not(:first-child) {
    margin-left: 10px;
  }
`;
export const InstanceDataItem = styled(DataItem)`
  /* margin-bottom: 10px; */
`;
