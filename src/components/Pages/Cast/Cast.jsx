import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Title, CastList, CastItem, Block, Image, Text } from './Cast.styled';
import { TheMovieDbAPI } from 'components/Servises/themoviedbapi';
import PropTypes from 'prop-types';
const theMovieDbAPI = new TheMovieDbAPI();

export function Cast() {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCast = async () => {
      try {
        const { data } = await theMovieDbAPI.getCastInfo(moviesId);

        if (data.cast.length === 0) {
          setError('Oooops! There is no cast info');
        } else {
          setCast(data.cast);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getCast();
  }, [moviesId]);

  return (
    <Block>
      <Title>Cast</Title>
      <CastList>
        {cast.slice(0, 10).map(castMember => (
          <CastItem key={castMember.id}>
            {castMember.profile_path ? (
              <Image
                src={`${TheMovieDbAPI.IMG_URL + castMember.profile_path}`}
                alt={castMember.name}
              />
            ) : (
              <Image
                src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                alt="Default Actor"
              />
            )}
            <h4>{castMember.name}</h4>
            <Text>Character: {castMember.character}</Text>
          </CastItem>
        ))}
      </CastList>
      {error && <p>{error}</p>}
    </Block>
  );
}

Cast.propTypes = {
  moviesId: PropTypes.number,
};
