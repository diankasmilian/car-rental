import { styled } from "styled-components";

export const Box = styled.div`
margin-top: 30px;
text-align: center;
`

export const List =styled.ul`
list-style: none;
// display: grid;
// grid-template-columns: 1fr 1fr 1fr 1fr;
// grid-column-gap: 29px;
display: flex;
flex-wrap: wrap;
justify-content: center;
column-gap: 29px;
row-gap: 50px;
`

export const Item = styled.li`
width: 274px;
cursor: pointer;
transition: transform 500ms ease;

&:hover {
  transform: scale(1.05);
}
`

export const Image = styled.img`
width: 274px;
height: 268px;
border-radius: 14px;
object-fit: cover;
`

export const TitleBox = styled.div`
margin-top: 14px;
display: flex;
justify-content: space-between;
`

export const Title = styled.h2`
font-size: 16px;
font-weight: 500;
line-height: 24px; 
`

export const Span = styled.span`
color: #3470FF;
`

export const Price = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 24px;
`

export const DescBox = styled.div`
margin-top: 8px;
text-align: start;
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
font-weight: 400;
line-height: 18px;
`

export const SpanLine = styled.span`
color: rgba(18, 20, 23, 0.10);
`

export const Button = styled.button`
margin-top: 28px;
padding: 12px 99px;
font-size: 14px;
color: #fff;
font-family: 'Manrope';
font-weight: 600;
line-height: 20px;
border-radius: 12px;
background: #3470FF;
border: none;
cursor: pointer;
transition: background 500ms ease;

&:hover {
background: #0B44CD;
}
`