import { useSelector } from 'react-redux';
import { getCars } from 'redux/selectors';
import { List, Box } from './Catalog.styled';
import CarCard from 'components/CarCard/CarCard';


const Catalog = () => {
const cars = useSelector(getCars);


return (
   <Box>
   <List>
      {cars.map((car) => (
         <CarCard key={car.id} car={car}/>
      ))}
   </List>
   </Box>
)
}

export default Catalog;

// id, img, model, make, year, rentalPrice, address, rentalCompany, type, mileage, accessories