import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  width: 100%;
  align-items: baseline;
`;
export const Text = styled.p`
  font-size: 16px;
`;
export const DelBtn = styled.button`
  padding: 8px;
  font-family: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-image: linear-gradient(144deg, #c6ffdd, #fbd786 50%, #f7797d);
  transition: 250ms ease;
  &:hover {
    scale: 1.1;
  }
`;
