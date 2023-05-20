import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
  border: 1px solid #000;
  min-width: 250px;
  padding: 30px;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px;
  min-width: 200px;
  min-height: 20px;
  border: 1px solid black;
  outline: none;
  border-radius: 5px;
`;

export const Btn = styled.button`
  padding: 10px;
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
