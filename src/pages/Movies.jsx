import { Section } from '../components/Section/Section.styled';
import Form from '../components/Form/Form';
import MoviesList from '../components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieByName } from '../api';
import { BsFillEmojiDizzyFill } from 'react-icons/bs';
import SyncLoader from 'react-spinners/SyncLoader';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');
  const location = useLocation();

  const onSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    getMovieByName(query)
      .then(({ results }) => {
        if (results.length > 0) {
          setMovies(results);
          setEmpty(false);
        } else setEmpty(true);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <Section>
      <Form onSubmit={onSubmit} />
      {loading && (
        <div
          style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}
        >
          <SyncLoader color="#ff0066" size={25} />
        </div>
      )}
      {!empty ? (
        <MoviesList movies={movies} location={location} />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2>
            Oops! <BsFillEmojiDizzyFill /> Please enter another movie name.
          </h2>
        </div>
      )}
    </Section>
  );
}
