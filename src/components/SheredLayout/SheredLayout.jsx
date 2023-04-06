import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './Container.styled';
import { Header } from './Header.styled';
import { Suspense } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &:not(:last-child) {
    margin: 10px;
  }

  &.active {
    color: #ff0066;
  }
`;

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense
        fallback={
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SyncLoader color="#ff0066" size={25} />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
