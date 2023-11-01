import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from './App.styled';
import CatalogView from 'views/CatalogView';
import HomeView from 'views/HomeView';
import Layout from './Layout/Layout';

export const App = () => {
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
