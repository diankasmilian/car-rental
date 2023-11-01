import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<div>Home</div>}/>
        <Route path='/catalog' element={<div>Catalog</div>}/>
        <Route path='/favorite' element={<div>Favorite</div>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
