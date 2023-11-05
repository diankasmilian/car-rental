import { useSelector } from 'react-redux';
import { getFavorite } from 'redux/selectors';
import { Box, List } from './Favorite.styled';
import CarCard from 'components/CarCard/CarCard';

const Favorite = () => {
  const favorite = useSelector(getFavorite);

  return (
    <Box>
      <List>
        {favorite.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </List>
    </Box>
  );
};

export default Favorite;
