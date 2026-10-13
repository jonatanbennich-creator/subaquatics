import { Waves } from 'lucide-react';
import { useLang } from '@/i18n';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-abyss-950 border-t border-abyss-300/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-abyss-400 to-abyss-600 flex items-center justify-center">
              <Waves className="w-4 h-4 text-abyss-50" strokeWidth={2.2} />
            </div>
            <span className="font-display font-semibold text-abyss-100 tracking-tight">
              Flateas SubAquatics
            </span>
          </div>

          <p className="text-sm text-deep-200 text-center">
            {t.footer.tagline}
          </p>

          <p className="text-sm text-deep-300">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
