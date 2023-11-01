import { useSelector } from 'react-redux';
import { getCars } from 'redux/selectors';
import { List, Image, Box, Item, TitleBox, Title, Price, Span, SpanLine, DescBox, Button } from './Catalog.styled';

const Catalog = () => {
const cars = useSelector(getCars);
return (
   <Box>
   <List>
      {cars.map(({id, img, model, make, year, rentalPrice, address, rentalCompany, type, mileage, accessories, functionalities}) => (
         <Item key={id}>
            <Image src={img} alt={model}/>

            <TitleBox>
            <Title>{make} <Span>{model}</Span>, {year}</Title>
            <Price>{rentalPrice}</Price>
            </TitleBox>

            <DescBox>
            <p>{address}  <SpanLine>|</SpanLine>  {rentalCompany}</p>
            <p>{type}  <SpanLine>|</SpanLine>  {mileage}  <SpanLine>|</SpanLine>   {accessories[1]}</p>
            </DescBox>
            
            <Button>Learn More</Button>
         </Item>
      ))}
   </List>
   </Box>
)
}

export default Catalog;