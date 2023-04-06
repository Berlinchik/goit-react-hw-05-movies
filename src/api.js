import axios from 'axios';

const API_KEY = 'a19b19d31f769a9a934606f8f3dc5bbb';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios
    .get('/trending/all/day', {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data)
    .catch(error => console.log(error.message));
  return response;
};

export const getMovieById = movieId => {
  return axios
    .get(`/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    })
    .then(res => {
      return res.data;
    });
};

export const getCast = async movieId => {
  const response = await axios
    .get(`/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    })
    .then(res => {
      return res.data.cast;
    })
    .catch(error => console.log(error.message));
  return response;
};

export const getReviews = async movieId => {
  const response = await axios
    .get(`/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    })
    .then(res => {
      return res.data.results;
    })
    .catch(error => console.log(error.message));
  return response;
};

export const getMovieByName = name => {
  return axios
    .get(`/search/movie`, {
      params: {
        api_key: API_KEY,
        query: name,
        language: 'en-US',
      },
    })
    .then(res => {
      return res.data;
    });
};
