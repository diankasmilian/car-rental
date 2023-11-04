import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFavorite, removeFavorite } from 'redux/favoriteSlice';
import { Item, Favotire, Image, TitleBox, Title, Price, Span, DescBox, SpanLine, Button, OutlineHeart, FillHeart, ImageBox, Overlay } from './CarCard.styled';


const CarCard = ({car}) => {
   const [addFavorite, setAddFavorite] = useState(false)

   const dispatch = useDispatch();
   
   const handleFavoriteClick = () => {
      if (addFavorite) {
          dispatch(removeFavorite(car));
      } else {
          dispatch(setFavorite(car));
      }
      setAddFavorite(!addFavorite);
    };

    return (
<Item>
   <Favotire onClick={handleFavoriteClick}>{addFavorite ? <FillHeart size={18}/> : <OutlineHeart size={20}/>}</Favotire>
            
            <ImageBox>
               <Image src={car.img} alt={car.model}/>
               <Overlay></Overlay>
            </ImageBox>
            

            <TitleBox>
            <Title>{car.make} <Span>{car.model}</Span>, {car.year}</Title>
            <Price>{car.rentalPrice}</Price>
            </TitleBox>

            <DescBox>
            <p>{car.address}  <SpanLine>|</SpanLine>  {car.rentalCompany}</p>
            <p>{car.type}  <SpanLine>|</SpanLine>  {car.mileage}  <SpanLine>|</SpanLine>   {car.accessories[1]}</p>
            </DescBox>
            
            <Button>Learn More</Button>
         </Item>
    )
}

export default CarCard;