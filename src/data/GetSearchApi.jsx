import axios from "axios";


axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getPopularMovies = () => {
  axios.defaults.params = {
   api_key: "f02791c07431f6e71112b21384bb0659",
  };
  return axios
    .get("/trending/movie/day")
    .then(({ data }) => data.results)
    .catch((err) => {
      throw err;
    });
};
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export const getMovieId = (movie_id) => {
  axios.defaults.params = {
   api_key: "f02791c07431f6e71112b21384bb0659",
  };
  return axios
    .get(`/movie/${movie_id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const getMovieIdCast = (movie_id) => {
  axios.defaults.params = {
   api_key: "f02791c07431f6e71112b21384bb0659",
  };
  return axios
    .get(`/movie/${movie_id}/credits`)
    .then(({ data }) => data.cast)
    .catch((err) => {
      throw err;
    });
};
export const getMovieIdReview = (movie_id, page = 1) => {
  axios.defaults.params = {
   api_key: "f02791c07431f6e71112b21384bb0659",
   page
  };
  return axios
    .get(`/movie/${movie_id}/reviews`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};
export const getMovieByInput = (query, page = 1) => {
  axios.defaults.params = {
   api_key: "f02791c07431f6e71112b21384bb0659",
   query,
   page
  };
  return axios
    .get(`/search/movie`)
    .then(({ data }) => {
      
      if (!data.results.length) {
      throw new Error("Porno?! Really?! Sergey are You 18 already?");
    }
   
    return data.results
  })
    .catch((err) => {
      throw err;
    });
};