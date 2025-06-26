import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Film {
  id: string | number; // идентификатор фильма
  title?: string; // можно добавить опциональные поля по необходимости
  category?: string[];
  description: string; // ✅ добавить
  categoryes: string[] | number; // ✅ добавить
  aboutInfo: string[];
  trailerUrl: string;
  imageUrl?: string; // добавлено для совместимости с MoviesCard
  
}

interface FavoritesState {
  favoritesMovies: Film[];
  status: 'loading' | 'fulfilled' | 'error';
}

function loadFavoritesMovies(): Film[] {
  const dataLocal = localStorage.getItem('favoritesMovies');
  const parseData = dataLocal ? JSON.parse(dataLocal) : [];
  return parseData;
}

const initialState: FavoritesState = {
  favoritesMovies: loadFavoritesMovies(),
  status: 'loading',
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoritesMovie: (state, action: PayloadAction<Film>) => {
      const dataFilm = action.payload;
      const isAlreadyFavorite = state.favoritesMovies.some((movie) => movie.id === dataFilm.id);

      if (!isAlreadyFavorite) {
        state.favoritesMovies.push(dataFilm);
        localStorage.setItem('favoritesMovies', JSON.stringify(state.favoritesMovies));
      }
    },
    removeFavoritesMovie: (state, action: PayloadAction<Film>) => {
      const dataFilm = action.payload;
      state.favoritesMovies = state.favoritesMovies.filter((movie) => movie.id !== dataFilm.id);
      localStorage.setItem('favoritesMovies', JSON.stringify(state.favoritesMovies));
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavoritesMovie, removeFavoritesMovie } = favoritesSlice.actions;
