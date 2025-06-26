import { Link } from 'react-router-dom';
import logo from '../../assets/icons/icon.png';
import heart from '../../assets/icons/heart.png';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link className="flex items-center gap-3 group" to="/">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 rounded-lg shadow-md transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col leading-tight">
            <p className="text-xl font-extrabold text-white tracking-widest">REACT</p>
            <p className="text-sm font-semibold text-indigo-400 tracking-widest">CINEMA</p>
          </div>
        </Link>
        <nav>
          <ul className="flex gap-6 md:gap-10 items-center">
            <li>
              <Link
                to="/"
                className="text-gray-200 hover:text-indigo-400 transition-colors font-medium text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="text-gray-200 hover:text-indigo-400 transition-colors font-medium text-lg">
                Favorites
              </Link>
            </li>
            <li>
              <Link
                to="/movie"
                className="text-gray-200 hover:text-indigo-400 transition-colors font-medium text-lg">
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="#categoryes"
                className="text-gray-200 hover:text-indigo-400 transition-colors font-medium text-lg">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="#categoryes"
                className="text-gray-200 hover:text-indigo-400 transition-colors font-medium text-lg">
                Help
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full shadow hover:bg-indigo-700 transition-colors cursor-pointer">
            <img src={heart} alt="favorites" className="w-5 h-5" />
            <p className="text-indigo-400 font-bold text-lg">0</p>
          </div>
          <Link
            to="/account"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition-colors">
            Account
          </Link>
        </div>
      </div>
    </header>
  );
}
