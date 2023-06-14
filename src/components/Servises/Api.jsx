import axios from 'axios';

export class TheMovieDbAPI {
  static BASE_URL = 'https://api.themoviedb.org/3';
  static API_KEY = 'b78615a25a38eec0481c17442651ef4d';
  static IMG_URL = 'https://image.tmdb.org/t/p/w500';

  constructor() {
    this.page = 1;
    this.query = null;
    this.per_page = 20;
  }

  async getPopularFilms(pageNumber) {
    this.page = pageNumber;
    const response = await axios.get(
      `${TheMovieDbAPI.BASE_URL}/trending/movie/week`,
      {
        params: {
          api_key: TheMovieDbAPI.API_KEY,
          page: this.page,
        },
      }
    );

    return response;
  }

  async fetchUniqFilms(query) {
    const searchParams = {
      params: {
        language: 'en-US',
        page: this.page,
        query: this.query,
        api_key: TheMovieDbAPI.API_KEY,
      },
    };

    const response = await axios.get(
      `${TheMovieDbAPI.BASE_URL}/search/movie`,
      searchParams
    );

    return response;
  }

  async getMovieInfoById(id) {
    const response = await axios.get(`${TheMovieDbAPI.BASE_URL}/movie/${id}?`, {
      params: {
        api_key: TheMovieDbAPI.API_KEY,
      },
    });

    return response;
  }

  async getCastInfo(id) {
    const response = await axios.get(
      `${TheMovieDbAPI.BASE_URL}/movie/${id}/credits?`,
      {
        params: {
          api_key: TheMovieDbAPI.API_KEY,
          language: 'en-US',
        },
      }
    );

    return response;
  }

  async getReviews(id) {
    const response = await axios.get(
      `${TheMovieDbAPI.BASE_URL}/movie/${id}/reviews?`,
      {
        params: {
          api_key: TheMovieDbAPI.API_KEY,
          language: 'en-US',
          page: this.page,
        },
      }
    );
    return response;
  }
}