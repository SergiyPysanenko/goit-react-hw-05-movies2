import {
  Container,
  MovieItem,
  LinkStyled,
  Image,
  Title,
} from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TheMovieDbAPI } from 'components/Servises/themoviedbapi';

const defaultPoster =
  'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

export function MoviesList({ id, title, poster_path }) {
  const location = useLocation();
  return (
    <Container>
      <MovieItem key={id}>
        <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
          {poster_path ? (
            <Image src={`${TheMovieDbAPI.IMG_URL + poster_path}`} alt={title} />
          ) : (
            <Image src={defaultPoster} alt="Default Poster" />
          )}
          <Title>{title}</Title>
        </LinkStyled>
      </MovieItem>
    </Container>
  );
}

MoviesList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
