import { styled } from "styled-components";
import photo from '../../img/cars-banner.jpg'

export const Presentation = styled.div`
  margin-top: 25px;
  margin-bottom: 45px;
  background: url(${photo}) no-repeat;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center center;
  background-blend-mode: multiply;
  background-color: rgba(18, 20, 23, 0.5);

  &::after {
   content: 'Fleet of Rental Cars';
  position: absolute;
  top: 300px;
  left: 520px;
  font-size: 50px;
  font-weight: 600;
  color: #fff;
  }
`

export const List = styled.ul`
display: flex;
justify-content: space-around;
list-style: none;
`

export const Item = styled.li`
text-align: center;
`

export const Text = styled.p`
font-weight: 400;
font-size: 20px;
`