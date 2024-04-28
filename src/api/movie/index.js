import axios from 'axios';
import { THE_MOVIE_DB_BASE_URL, TOKEN } from '../../constants/themoviedb';

const instance = axios.create({
  baseURL: THE_MOVIE_DB_BASE_URL,
  params: {language: 'en-US'},
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  }
});

export const getTrendingApi = async () => {
  const { data } = await instance.get('/trending/movie/day');

  return data;
};

export const searchMoviesApi = async (query) => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: query,
      page: 1,
      include_adult: 'false',
    }
  });

  return data;
};

export const getMovieApi = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}`);

  return data;
};

export const getMovieCastApi = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);

  return data;
};

export const getMovieReviewsApi = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`, {
    params: {
      page: 1,
    }
  });

  return data;
};
