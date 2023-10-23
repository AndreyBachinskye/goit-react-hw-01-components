import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  background-color: white;
  margin-bottom: 5px;
  border-radius: 5px;
  & span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${({ isOnline }) => (isOnline ? 'green' : 'tomato')};
    border-radius: 50%;
  }
  &p {
    font-weight: 700;
  }
`;