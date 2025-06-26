import { useDispatch } from 'react-redux';
import Rating from '../Rating';
import { addFavoritesMovie, removeFavoritesMovie } from '../../../redux/slices/favoritesSlice';

interface FilmInfo {
  id: string; // добавлено для соответствия типу
  title: string;
  description: string;
  categoryes: string[]; // название странное, но оставим, если ты сам так написал
  // можно добавить другие поля, если есть
}

interface MainInfoLeftProps {
  filmInfo: {
    film: FilmInfo;
  };
}

function MainInfoLeft({ filmInfo }: MainInfoLeftProps) {
  const dataFilm = filmInfo.film;
  const dispatch = useDispatch();

  return (
    <div className="main__info-left">
      <button
        className="main__info-left-favorite"
        onClick={() => dispatch(addFavoritesMovie(dataFilm))}>
        Favorite
      </button>
      <button
        className="main__info-left-favorite"
        onClick={() => dispatch(removeFavoritesMovie(dataFilm))}>
        Remove Favorite
      </button>
      <div className="main__info-left-title">
        <p>{dataFilm.title}</p>
        <Rating />
      </div>
      <div className="main__info-left-categoryes">
        {dataFilm.categoryes.map((value: string, index: number) => (
          <p key={index}>{value}</p>
        ))}
      </div>
      <div className="main__info-left-about">
        <p>Description</p>
        <p>{dataFilm.description}</p>
      </div>
    </div>
  );
}

export default MainInfoLeft;
