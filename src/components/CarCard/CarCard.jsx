import { useDispatch, useSelector } from 'react-redux';
import { getFavorite } from 'redux/selectors';
import { setFavorite, removeFavorite } from 'redux/favoriteSlice';
import { Item, Favotire, Image, TitleBox, Title, Price, Span, DescBox, SpanLine, Button, OutlineHeart, FillHeart, ImageBox, Overlay } from './CarCard.styled';


const CarCard = ({car}) => {

   const dispatch = useDispatch();
   const favoriteList  = useSelector(getFavorite);
   const isFavorite = favoriteList.some(favCar => favCar.id === car.id);
   
   const handleFavoriteClick = () => {
      if (isFavorite) {
          dispatch(removeFavorite(car));
      } else {
          dispatch(setFavorite(car));
      }
    };

    return (
<Item>
   <Favotire onClick={handleFavoriteClick}>{isFavorite ? <FillHeart size={18}/> : <OutlineHeart size={20}/>}</Favotire>
            
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