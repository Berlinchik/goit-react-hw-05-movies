import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Item, Title, Content } from './Reviews.styled';
import { getReviews } from '../../api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews(movieId)
      .then(res => {
        setReviews(res);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  if (!reviews) return;

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <Item key={id}>
          <Title>{author}</Title>
          <Content>{content}</Content>
        </Item>
      ))}
    </ul>
  ) : (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Title>We don't have any reviews for this movie</Title>
    </div>
  );
};

export default Reviews;
