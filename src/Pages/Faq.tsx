function Faq() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Часто задаваемые вопросы (FAQ)</h1>
      <div className="max-w-xl w-full space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">Как найти фильм?</h2>
          <p>Вы можете воспользоваться поиском по названию фильма или выбрать жанр в меню сайта.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1">Как посмотреть фильм?</h2>
          <p>Нажмите на понравившийся фильм, чтобы перейти на его страницу и начать просмотр.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1">Почему фильм не воспроизводится?</h2>
          <p>
            Проверьте подключение к интернету и попробуйте обновить страницу. Если проблема не
            решилась, напишите в поддержку.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1">Как связаться с поддержкой?</h2>
          <p>
            Вы можете написать нам на электронную почту support@kutmovies.com или воспользоваться
            формой обратной связи на сайте.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Faq;
