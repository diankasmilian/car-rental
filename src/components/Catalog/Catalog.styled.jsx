import { styled } from 'styled-components';

export const Box = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr 1fr;
  // grid-column-gap: 29px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 29px;
  row-gap: 50px;
`;
