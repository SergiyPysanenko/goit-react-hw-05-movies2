import { useState, useEffect } from 'react';
import { TheMovieDbAPI } from 'components/Servises/themoviedbapi';
import { useParams } from 'react-router-dom';
import { Title, Block, Text, RevievsList, RevievsItem } from './Reviews.styled';
import PropTypes from 'prop-types';

const theMovieDbAPI = new TheMovieDbAPI();

export function Reviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await theMovieDbAPI.getReviews(moviesId);

        if (data.results.length === 0) {
          setError('Oooops! There is no reviews');
        } else {
          setReviews(data.results);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getReviews();
  }, [moviesId]);

  return (
    <Block>
      <Title>Reviews</Title>

      <RevievsList>
        {reviews.map(review => (
          <RevievsItem key={review.id}>
            <h4>Author: {review.author}</h4>
            <Text>{review.content}</Text>
          </RevievsItem>
        ))}
      </RevievsList>

      {error && <p>{error}</p>}
    </Block>
  );
}

Reviews.propTypes = {
  moviesId: PropTypes.number,
};
