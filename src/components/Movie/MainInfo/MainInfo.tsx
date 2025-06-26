import MainInfoLeft from './MainInfoLeft';
import MainInfoRight from './MainInfoRight';
import { searchFilmInState } from '../../../redux/slices/moviesSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';

function MainInfo() {
  const { id } = useParams<{ id: string }>(); // ✅ достаём id с типом
  const dispatch = useDispatch();

  const { searchFilm, status } = useSelector((store: RootState) => store.movies); // ✅ указали RootState

  useEffect(() => {
    if (status === 'fulfilled' && id) {
      dispatch(searchFilmInState({ id }));
    }
  }, [dispatch, status, id]); // ✅ добавили id в зависимости

 return (
  <div className="main__info">
    {searchFilm.status === 'loading' ? (
      <p>Loading...</p>
    ) : searchFilm.film ? (
      <>
        <MainInfoLeft filmInfo={{ film: searchFilm.film }} />
        <MainInfoRight filmInfo={{ film: searchFilm.film }} />
      </>
    ) : (
      <p>Фильм не найден.</p>
    )}
  </div>
 );
}

export default MainInfo;
