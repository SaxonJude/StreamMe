import axios from 'axios';
import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE } from './types';

import { APIKey } from '../APIKey';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
};

export const fetchMovies = text => dispatch => {
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${APIKey}&query=${text}&page=1`)
    .then(res => {
        dispatch({
            type: FETCH_MOVIES,
            payload: res.data.results
        })
    })
    .catch(err => console.log(err));
}

export const fetchMovie = id => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`)
      .then(response =>
        dispatch({
          type: FETCH_MOVIE,
          payload: response.data
        })
      )
      .catch(err => console.log(err));
  };
