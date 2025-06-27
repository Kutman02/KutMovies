import video from '../../assets/videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4';

function Banner() {
  return (
    <section className="relative h-[500px] sm:h-[600px] bg-black overflow-hidden rounded-xl shadow-xl">
      {/* Видеофон */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline>
        <source src={video} type="video/mp4" />
      </video>

      {/* Затемнение видео */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Контент поверх видео */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6">
        <h1 className="text-white text-4xl sm:text-5xl font-bold">РЕАКТ КИНО</h1>
        <p className="mt-4 text-white/80 text-lg max-w-2xl">
          Подзаголовок, который задаёт контекст, рассказывает больше о сайте или мотивирует
          продолжить просмотр.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a href="#movies" className="btn btn-primary">
            Смотреть фильмы
          </a>
          <button className="btn btn-secondary text-white hover:bg-white hover:text-indigo-600">
            Избранное
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
