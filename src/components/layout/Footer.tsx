import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import youtube from '../../assets/icons/youtube.png';
import linkedin from '../../assets/icons/linkedin.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-2xl font-bold text-gray-900 tracking-wide">REACT CINEMA</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagram} alt="Instagram" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src={youtube} alt="YouTube" className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 text-center md:text-left">
          <div>
            <p className="font-semibold text-gray-700 mb-2">Main</p>
            <ul className="space-y-1 text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Topic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Topic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Topic
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-2">FAQ</p>
            <ul className="space-y-1 text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Topic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Topic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Topic
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-2">Reports</p>
            <ul className="space-y-1 text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Topic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Topic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Topic
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
