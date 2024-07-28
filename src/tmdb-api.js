import axios from "axios";

export async function getAllMovies(page) {
  const url = "https://api.themoviedb.org/3/trending/movie/day";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY1ZGU1MzUwM2EwMDI1Y2YzZjFiNGY1NmZmNjFlNSIsIm5iZiI6MTcyMTc2MDA4Ni4xNTc3NjIsInN1YiI6IjY2OWZhMmI3NmViMzYwOTQxOTUyY2YzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-QFnsWwjvLGkgD0Opyo6nI3Y_AX06YmQP9D5h7dirPc",
    },
    params: { page },
  };

  const response = await axios.get(url, options);
  return response.data;
}

export async function getMovieById(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY1ZGU1MzUwM2EwMDI1Y2YzZjFiNGY1NmZmNjFlNSIsIm5iZiI6MTcyMTc2MDA4Ni4xNTc3NjIsInN1YiI6IjY2OWZhMmI3NmViMzYwOTQxOTUyY2YzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-QFnsWwjvLGkgD0Opyo6nI3Y_AX06YmQP9D5h7dirPc",
    },
  };

  const response = await axios.get(url, options);
  return response.data;
}

export async function getCastInfo(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY1ZGU1MzUwM2EwMDI1Y2YzZjFiNGY1NmZmNjFlNSIsIm5iZiI6MTcyMTc2MDA4Ni4xNTc3NjIsInN1YiI6IjY2OWZhMmI3NmViMzYwOTQxOTUyY2YzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-QFnsWwjvLGkgD0Opyo6nI3Y_AX06YmQP9D5h7dirPc",
    },
  };

  const response = await axios.get(url, options);

  return response.data;
}

export async function getReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY1ZGU1MzUwM2EwMDI1Y2YzZjFiNGY1NmZmNjFlNSIsIm5iZiI6MTcyMTc2MDA4Ni4xNTc3NjIsInN1YiI6IjY2OWZhMmI3NmViMzYwOTQxOTUyY2YzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-QFnsWwjvLGkgD0Opyo6nI3Y_AX06YmQP9D5h7dirPc",
    },
  };

  const response = await axios.get(url, options);

  return response.data;
}

export async function getMovieByName(movieName, page) {
  const url = `https://api.themoviedb.org/3/search/movie`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY1ZGU1MzUwM2EwMDI1Y2YzZjFiNGY1NmZmNjFlNSIsIm5iZiI6MTcyMTc2MDA4Ni4xNTc3NjIsInN1YiI6IjY2OWZhMmI3NmViMzYwOTQxOTUyY2YzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-QFnsWwjvLGkgD0Opyo6nI3Y_AX06YmQP9D5h7dirPc",
    },
    params: {
      query: movieName,
      page,
    },
  };

  const response = await axios.get(url, options);

  return response.data;
}
