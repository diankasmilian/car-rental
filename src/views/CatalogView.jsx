import Catalog from '../components/Catalog/Catalog';
import { useSelector } from 'react-redux';
import { getError, getIsLoading, getShowLoadMore } from 'redux/selectors';
import LoadMore from 'components/LoadMore/LoadMore';
import Filter from 'components/Filter/Filter';

const CatalogView = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const showLoadMore = useSelector(getShowLoadMore);
  return (
    <>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <Catalog />
      {showLoadMore && <LoadMore />}
    </>
  );
};

export default CatalogView;
