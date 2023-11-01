import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, MainTitle, Nav, NavList, Footer } from './Layout.styled';

const Layout = () => {
   return (
      <>
      <Header>
<MainTitle>Car Rental</MainTitle>

<Nav>
   <NavList to="/">Home</NavList>
   <NavList to="/catalog">Catalog</NavList>
   <NavList to="/favorite">Favorite</NavList>
</Nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer>Всі права захищені &copy; </Footer>
      </>
   )
}

export default Layout;