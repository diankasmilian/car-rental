import Catalog from '../components/Catalog/Catalog'
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import LoadMore from 'components/LoadMore/LoadMore';

const CatalogView = () => {
   const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
   return (
      <>
      {isLoading && !error && <b>Request in progress...</b>}
      <Catalog/>
      <LoadMore/>
      </>
   )
}

export default CatalogView;