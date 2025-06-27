import star from '../../assets/icons/star.png';

function Rating() {
  return (
    <div className="flex items-center gap-1 md:gap-2 py-2">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={star}
          alt="star"
          className="w-5 h-5 md:w-6 md:h-6 object-contain drop-shadow-sm"
        />
      ))}
    </div>
  );
}

export default Rating;
