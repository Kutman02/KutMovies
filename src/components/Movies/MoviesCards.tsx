import React from 'react';
import MoviesCard from './MoviesCard';

// Тип одного фильма (должен соответствовать пропсам, которые ожидает MoviesCard)
interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  categoryes: string[];
}

// Тип пропсов компонента MoviesCards
interface MoviesCardsProps {
  films: {
    filteredMovies: Movie[];
    filteredMoviesCategoryes: Movie[];
    films: Movie[];
  };
}

const MoviesCards: React.FC<MoviesCardsProps> = ({ films }) => {
  let moviesToShow: Movie[] = [];

  if (films.filteredMovies.length > 0) {
    moviesToShow = films.filteredMovies;
  } else if (films.filteredMoviesCategoryes.length > 0) {
    moviesToShow = films.filteredMoviesCategoryes;
  } else {
    moviesToShow = films.films;
  }

  return (
    <>
      {moviesToShow.map((value: Movie) => (
        <MoviesCard key={value.id} {...value} />
      ))}
    </>
  );
};

export default MoviesCards;
