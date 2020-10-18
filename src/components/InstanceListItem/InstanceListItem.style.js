import styled from 'styled-components';

export const Item = styled.li`
  background-color: white;
  padding: 20px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  box-shadow: 6px 7px 14px -5px rgba(0,0,0,0.42);
  border-radius: 5px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
