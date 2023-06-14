import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { TheMovieDbAPI } from 'components/Servises/Api';
import { MovieList } from './Movies.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import PropTypes from 'prop-types';

const theMovieDbAPI = new TheMovieDbAPI();
function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');
  theMovieDbAPI.query = searchQuery;
  useEffect(() => {
    if (searchQuery === null) return;

    const getMovies = async () => {
      try {
        const { data } = await theMovieDbAPI.fetchUniqFilms();
        if (data.results.length === 0) {
          setError('Movie not found...');
        } else {
          setMovies(data.results);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, [searchQuery]);

  const onSubmit = searchValue => {
    setSearchParams({ query: searchValue });
  };

  return (
    <section>
      <SearchForm defaultValue={searchQuery} onSubmit={onSubmit} />
      <MovieList>
        {movies.length !== 0 &&
          movies.map(movie => {
            return <MoviesList {...movie} key={movie.id} />;
          })}
      </MovieList>
      {error && <p>{error}</p>}
    </section>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default Movies;
