import { useState, useEffect } from 'react';
import { useParams, Routes, Route, useLocation, Link } from 'react-router-dom';
import { TheMovieDbAPI } from 'components/Servises/themoviedbapi';
import { Cast } from 'components/Pages/Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import {
  Block,
  Image,
  InfoBlock,
  Title,
  NavLinkStyled,
} from './MovieDetails.styled';

const theMovieDbAPI = new TheMovieDbAPI();

function MovieDetails() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');
  const [isCastVisible, setIsCastVisible] = useState(false);
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await theMovieDbAPI.getMovieInfoById(moviesId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, [moviesId]);

  const { poster_path, title, vote_average, genres, overview } = movie;

  const toggleCastVisibility = () => {
    setIsCastVisible(!isCastVisible);
  };

  return (
    <>
      <Link to={goBackLink}>Go back</Link>
      {movie && (
        <Block>
          {poster_path ? (
            <Image src={`${TheMovieDbAPI.IMG_URL + poster_path}`} alt={title} />
          ) : null }
          <InfoBlock>
            <h1>{title}</h1>
            <p>User score: {Math.round(vote_average * 10)} %</p>
            <p>
              <b>Overview: </b>
              {overview}
            </p>
            {genres && (
              <p>
                <b>Genres: </b>
                {genres.map((genre) => genre.name).join(', ')}
              </p>
            )}
          </InfoBlock>
        </Block>
      )}
      {error && <p>Error{error}</p>}
      <Title>Additional information</Title>
      <ul>
        <li>
          <NavLinkStyled
            to={`cast`}
            state={{ from: location?.state?.from ?? '/' }}
            onClick={toggleCastVisibility}
          >
            Cast
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to={`reviews`}
            state={{ from: location?.state?.from ?? '/' }}
            onClick={toggleCastVisibility}
          >
            Reviews
          </NavLinkStyled>
        </li>
      </ul>

      <Routes>
        <Route path="cast" element={isCastVisible && <Cast />} />
        <Route path="reviews" element={isCastVisible && <Reviews />} />
      </Routes>
    </>
  );
}

export default MovieDetails;
