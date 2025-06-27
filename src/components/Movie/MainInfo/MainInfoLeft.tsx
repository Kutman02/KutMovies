import { useDispatch } from 'react-redux';
import Rating from '../Rating';
import { addFavoritesMovie, removeFavoritesMovie } from '../../../redux/slices/favoritesSlice';

interface FilmInfo {
  id: string;
  title: string;
  description: string;
  categoryes: string[];
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
    <div className="w-full max-w-xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex flex-col gap-6 md:gap-8">
      <div className="flex items-center gap-4">
        <button
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          onClick={() => dispatch(addFavoritesMovie(dataFilm))}>
          Favorite
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
          onClick={() => dispatch(removeFavoritesMovie(dataFilm))}>
          Remove Favorite
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{dataFilm.title}</p>
        <Rating />
      </div>
      <div className="flex flex-wrap gap-2">
        {dataFilm.categoryes.map((value: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200">
            {value}
          </span>
        ))}
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">Description</p>
        <p className="text-gray-700 dark:text-gray-300">{dataFilm.description}</p>
      </div>
    </div>
  );
}

export default MainInfoLeft;
