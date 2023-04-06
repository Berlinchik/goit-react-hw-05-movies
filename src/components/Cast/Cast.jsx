import { useState, useEffect } from 'react';
import { getCast } from '../../api';
import { useParams } from 'react-router-dom';
import CastItem from './CastItem';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        const response = await getCast(movieId);
        setCast(response);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  if (!cast) return;

  return (
    <section>
      <ul>
        {cast.map(({ credit_id, character, name, profile_path }) => (
          <CastItem
            key={credit_id}
            character={character}
            name={name}
            imgURL={profile_path}
          />
        ))}
      </ul>
    </section>
  );
}
