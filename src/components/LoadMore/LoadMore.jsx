import { useDispatch, useSelector } from 'react-redux';
import { getPage } from 'redux/selectors';
import { setPage } from 'redux/pageSlice';
import { Button, Box } from './LoadMore.styled';

const LoadMore = () => {
  const page = useSelector(getPage);
  const dispatch = useDispatch();

  const handleClick = () => {
    const newPage = page + 1;
    dispatch(setPage(newPage));
  };
  return (
    <Box>
      <Button onClick={handleClick}>Load More</Button>
    </Box>
  );
};

export default LoadMore;
