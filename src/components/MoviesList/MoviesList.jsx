import MovieItem from './MovieItem';

export default function MoviesList({ movies, location }) {
  return (
    <ul>
      {movies &&
        movies.map(({ id, title, name }) => (
          <MovieItem
            key={id}
            title={title ? title : name}
            id={id}
            location={location}
          />
        ))}
    </ul>
  );
}
