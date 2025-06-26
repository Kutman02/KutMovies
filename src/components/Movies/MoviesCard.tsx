import { Link } from 'react-router-dom';
import star from '../../assets/icons/star.png';

interface MoviesCardProps {
  id: string | number;
  title: string;
  imageUrl: string;
  categoryes: (string | number)[];
}

function MoviesCard(props: MoviesCardProps) {
  const categoryPlus = props.categoryes.find(
    (item): item is string => typeof item === 'string' && item.includes('+'),
  );
  const categoryYear = props.categoryes.find((item): item is number => typeof item === 'number');

  return (
    <Link className="movies__card" to={`/movie/${props.id}`}>
      <div className="movies__card-rating">
        <p>{categoryPlus}</p>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <img src={props.imageUrl} alt="" />
      <div className="movies__card-title">
        <p>{props.title}</p>
        <p>({categoryYear})</p>
      </div>
    </Link>
  );
}

export default MoviesCard;
