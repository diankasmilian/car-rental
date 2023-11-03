import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import { getPage } from 'redux/selectors';
import { Box } from './App.styled';
import CatalogView from 'views/CatalogView';
import HomeView from 'views/HomeView';
import Layout from './Layout/Layout';

export const App = () => {

  const dispatch = useDispatch();

  const page = useSelector(getPage)

  useEffect(() => {
     dispatch(fetchCars(page));
  
       
}, [dispatch, page]);

  return (
    <Box>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomeView/>}/>
        <Route path='/catalog' element={<CatalogView/>}/>
        <Route path='/favorite' element={<div>Favorite</div>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
    </Box>
  );
};
