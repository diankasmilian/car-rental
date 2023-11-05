import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import { getPage, getFilter } from 'redux/selectors';
import { Box } from './App.styled';
import CatalogView from 'views/CatalogView';
import HomeView from 'views/HomeView';
import Layout from './Layout/Layout';
import FavoriteView from 'views/FavoriteView';

export const App = () => {
  const dispatch = useDispatch();

  const page = useSelector(getPage);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page, filter]);

  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="/catalog" element={<CatalogView />} />
          <Route path="/favorite" element={<FavoriteView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Box>
  );
};
