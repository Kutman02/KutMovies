import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { searchCategoryesFilms } from '../../redux/slices/moviesSlice';

function FilterButtons() {
  const dispatch = useAppDispatch();
  const filmsCategory = useAppSelector((store) => store.movies.filmsCategory);

  const [active, changeActive] = React.useState<string>('All');

  function categoryButtonLogic(value: string) {
    changeActive(value);
    dispatch(searchCategoryesFilms(value));
  }

  return (
    <div className="filter__buttons">
      <button
        onClick={() => categoryButtonLogic('All')}
        className={active === 'All' ? 'active' : ''}>
        All
      </button>

      {filmsCategory.map((value: string, index: number) => (
        <button
          key={index}
          onClick={() => categoryButtonLogic(value)}
          className={value === active ? 'active' : ''}>
          {value}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
