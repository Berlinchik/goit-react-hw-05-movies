import {
  BoxContainer,
  Paragraph,
  Box,
  StyledLink,
  InfoBox,
} from './MovieCard.styled';
import { Outlet } from 'react-router-dom';

const MovieCard = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
  backLinkHref,
}) => {
  return (
    <div>
      <BoxContainer>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/` + poster_path}
            alt={title}
          />
        </div>
        <div>
          <h2>{title}</h2>
          <p>User Score: {vote_average}</p>
          <Box>
            <b>Overview:</b>
            {overview}
          </Box>
          <Box>
            <b>Genres:</b>
            <Paragraph>
              {genres.map(({ name }, idx) => (
                <span key={idx}>{name}</span>
              ))}
            </Paragraph>
          </Box>
        </div>
      </BoxContainer>
      <InfoBox>
        <h2>Additional information</h2>
        <StyledLink to={'cast'} state={{ from: backLinkHref }}>
          Cast
        </StyledLink>
        <StyledLink to={'reviews'} state={{ from: backLinkHref }}>
          Reviews
        </StyledLink>
      </InfoBox>
      <Outlet />
    </div>
  );
};

export default MovieCard;
