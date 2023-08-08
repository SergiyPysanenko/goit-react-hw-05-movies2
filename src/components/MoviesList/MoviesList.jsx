import { Container, MovieItem, LinkStyled, Image, Title } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TheMovieDbAPI } from 'components/Servises/themoviedbapi';
import { Loader } from 'components/Loader/Loader';


export function MoviesList({ id, title, poster_path }) {
  const location = useLocation();
  return (
    <Container>
      <MovieItem key={id}>
        <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
          {poster_path ? (
            <Image src={`${TheMovieDbAPI.IMG_URL + poster_path}`} alt={title} />
          ) : (
            <Loader />
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
