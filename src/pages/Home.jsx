import MoviesList from '../components/MoviesList/MoviesList';
import { Section } from '../components/Section/Section.styled';
import { getTrendingMovies } from '../api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <Section>
      <h1>Trending today</h1>
      <MoviesList movies={movies} location={location} />
    </Section>
  );
}
