import { useSelector } from 'react-redux';
import { getFavorite } from 'redux/selectors';

const Favorite = () => {
   const favorite = useSelector(getFavorite)

   return (
      <>
      <ul>
         {favorite.map((favCar) => (
            <li key={favCar.id}>
               <h2>{favCar.make}</h2>
            </li>
         ))}
      </ul>
      </>
   )
}

export default Favorite;