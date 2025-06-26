import React from 'react';
import MoviesCard from './MoviesCard';

// Тип для одного фильма — подкорректируй под свои данные
interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  categoryes: (string | number)[];
  description?: string; // добавь здесь остальные нужные поля
  // добавь здесь остальные нужные поля
}

// Тип пропсов компонента
interface FavoriteMoviesListProps {
  favorites: {
    filteredMovies: Movie[];
    filteredMoviesCategoryes: Movie[];
    favoritesMovies: Movie[];
  };
}

const FavoriteMoviesList: React.FC<FavoriteMoviesListProps> = ({ favorites }) => {
  let moviesToShow: Movie[] = [];

  if (favorites.filteredMovies.length > 0) {
    moviesToShow = favorites.filteredMovies.filter((searchFilms) =>
      favorites.favoritesMovies.some((searchTitle) => searchTitle.title === searchFilms.title),
    );
  } else if (favorites.filteredMoviesCategoryes.length > 0) {
    moviesToShow = favorites.filteredMoviesCategoryes.filter((searchFilms) =>
      favorites.favoritesMovies.some((searchTitle) => searchTitle.title === searchFilms.title),
    );
  } else if (favorites.favoritesMovies.length === 0) {
    return <p>У вас нет избранных фильмов</p>;
  } else {
    moviesToShow = favorites.favoritesMovies;
  }

  return (
    <>
      {moviesToShow.map((value, index) => (
        <MoviesCard key={index} {...value} />
      ))}
    </>
  );
};

export default FavoriteMoviesList;
