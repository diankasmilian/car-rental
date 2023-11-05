import Catalog from '../components/Catalog/Catalog';
import { useSelector } from 'react-redux';
import { getError, getIsLoading, getShowLoadMore } from 'redux/selectors';
import LoadMore from 'components/LoadMore/LoadMore';
import Filter from 'components/Filter/Filter';
import { Hourglass } from 'react-loader-spinner';

const CatalogView = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const showLoadMore = useSelector(getShowLoadMore);
  return (
    <>
      <Filter />
      {isLoading && !error && (
        <Hourglass wrapperStyle={{ marginTop: 100, marginLeft: 550 }} />
      )}
      <Catalog />
      {showLoadMore && <LoadMore />}
    </>
  );
};

export default CatalogView;
