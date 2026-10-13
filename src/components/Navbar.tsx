import { Waves, Globe } from 'lucide-react';
import { useLang, type Lang } from '@/i18n';

export default function Navbar() {
  const { lang, setLang, t } = useLang();

  const toggleLang = () => setLang(lang === 'sv' ? 'en' : 'sv');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-abyss-400 to-abyss-600 flex items-center justify-center shadow-lg shadow-abyss-500/20 group-hover:shadow-abyss-400/40 transition-shadow duration-300">
              <Waves className="w-5 h-5 text-abyss-50" strokeWidth={2.2} />
            </div>
            <span className="font-display font-semibold text-lg text-abyss-50 tracking-tight">
              Flateas SubAquatics
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#fokus" className="text-sm font-medium text-deep-100 hover:text-white transition-colors duration-200">
              {t.nav.fokus}
            </a>
            <a href="#teknik" className="text-sm font-medium text-deep-100 hover:text-white transition-colors duration-200">
              {t.nav.teknik}
            </a>
            <a href="#kontakt" className="text-sm font-medium text-deep-100 hover:text-white transition-colors duration-200">
              {t.nav.kontakt}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg glass-light text-abyss-100 hover:text-white text-sm font-medium transition-all duration-300 hover:border-abyss-300/30"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{lang}</span>
            </button>

            <a
              href="#kontakt"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-abyss-400/90 hover:bg-abyss-300 text-abyss-950 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-abyss-400/30"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
