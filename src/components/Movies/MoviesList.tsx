import React from 'react';
import LoadingMovies from '../Movies/LoadingMovies';
import MoviesCards from './MoviesCards';
import FavoriteMoviesList from './FavoriteMoviesList';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useLocation } from 'react-router-dom';

function MoviesList() {
  const path = useLocation();

  const { films, status, filteredMovies, filteredMoviesCategoryes } = useSelector(
    (store: RootState) => store.movies,
  );

  const { favoritesMovies } = useSelector((store: RootState) => store.favorites);

  // Преобразуем id в строку, чтобы соответствовать типу Movie
  const normalizeId = (arr: any[]) => arr.map((film) => ({ ...film, id: String(film.id) }));

  const normalizedData = {
    films: normalizeId(films),
    filteredMovies: normalizeId(filteredMovies),
    filteredMoviesCategoryes: normalizeId(filteredMoviesCategoryes),
    favoritesMovies: normalizeId(favoritesMovies),
  };

  return (
    <div id="movies" className="movies anchor">
      {path.pathname === '/favorites' ? (
        <FavoriteMoviesList
          favorites={{
            favoritesMovies: normalizedData.favoritesMovies,
            filteredMovies: normalizedData.filteredMovies,
            filteredMoviesCategoryes: normalizedData.filteredMoviesCategoryes,
          }}
        />
      ) : status === 'loading' ? (
        <LoadingMovies />
      ) : (
        <MoviesCards
          films={{
            films: normalizedData.films,
            filteredMovies: normalizedData.filteredMovies,
            filteredMoviesCategoryes: normalizedData.filteredMoviesCategoryes,
          }}
        />
      )}
    </div>
  );
}

export default MoviesList;
