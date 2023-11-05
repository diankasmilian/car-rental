import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Hourglass } from 'react-loader-spinner';
import {
  Header,
  MainTitle,
  Nav,
  NavList,
  Footer,
  LoaderBox,
} from './Layout.styled';

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
        <Suspense
          fallback={
            <LoaderBox>
              <Hourglass />
            </LoaderBox>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <Footer>Всі права захищені &copy; </Footer>
    </>
  );
};

export default Layout;
