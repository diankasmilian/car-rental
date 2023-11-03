import Catalog from '../components/Catalog/Catalog'
import { useSelector } from 'react-redux';
import { getError, getIsLoading, getShowLoadMore } from 'redux/selectors';
import LoadMore from 'components/LoadMore/LoadMore';

const CatalogView = () => {
   const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const showLoadMore = useSelector(getShowLoadMore)
   return (
      <>
      {isLoading && !error && <b>Request in progress...</b>}
      <Catalog/>
      {showLoadMore && <LoadMore/>}
      
      </>
   )
}

export default CatalogView;