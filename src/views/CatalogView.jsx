import Catalog from '../components/Catalog/Catalog'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

const CatalogView = () => {
   const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

   return (
      <>
      {isLoading && !error && <b>Request in progress...</b>}
      <Catalog/>
      </>
   )
}

export default CatalogView;