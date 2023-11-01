import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from 'views/HomeView';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomeView/>}/>
        <Route path='/catalog' element={<div>Catalog</div>}/>
        <Route path='/favorite' element={<div>Favorite</div>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
