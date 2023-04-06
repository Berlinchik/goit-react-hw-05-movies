import { Button } from '../components/MovieCard/MovieCard.styled';
import { Section } from '../components/Section/Section.styled';
import { BsArrowLeft } from 'react-icons/bs';
import MovieCard from '../components/MovieCard/MovieCard';
import { getMovieById } from '../api';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? '/';

  const handleGoBack = () => {
    navigate(backLinkHref);
  };

  useEffect(() => {
    setLoading(true);
    getMovieById(movieId)
      .then(data => {
        setInfo(data);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <Section>
      <Button onClick={handleGoBack}>
        <BsArrowLeft size={20} />
        Go back
      </Button>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SyncLoader color="#ff0066" size={25} />
        </div>
      )}
      {info && <MovieCard {...info} backLinkHref={backLinkHref} />}
      {!loading && error && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2>Something go wrong! Try again later.</h2>
        </div>
      )}
    </Section>
  );
};

export default MovieDetails;
