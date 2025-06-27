import ImageFılm from '../../assets/ImageFılm.jpg';

function FavoritesCart() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row transition hover:shadow-lg">
      <img src={ImageFılm} alt="Постер фильма" className="h-48 w-full object-cover md:w-48" />
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">Бегущий по лезвию 2049</h2>
          <p className="text-gray-500 text-sm mb-4">Ридли Скотт</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          <span className="bg-gray-100 px-2 py-1 rounded">Film</span>
          <span className="bg-gray-100 px-2 py-1 rounded">2019</span>
          <span className="bg-gray-100 px-2 py-1 rounded">180m</span>
          <span className="bg-yellow-400 px-2 py-1 rounded font-bold">9.1</span>
        </div>
      </div>
    </div>
  );
}

export default FavoritesCart;
