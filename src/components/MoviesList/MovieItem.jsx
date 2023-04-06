import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ff0066;
  }
`;

const MovieItem = ({ title, id, location }) => {
  return (
    <li>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <p>{title}</p>
      </StyledLink>
    </li>
  );
};

export default MovieItem;
