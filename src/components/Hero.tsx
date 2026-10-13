import { ArrowDown, Eye } from 'lucide-react';
import { useLang } from '@/i18n';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5007946/pexels-photo-5007946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt={t.hero.bgAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss-950/70 via-abyss-950/60 to-abyss-950" />
        <div className="absolute inset-0 caustic-overlay" />
      </div>

      {/* Floating accent orb */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-abyss-400/10 blur-3xl animate-float hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light mb-8 animate-fade-in opacity-0">
          <Eye className="w-4 h-4 text-abyss-300" />
          <span className="text-sm font-medium text-abyss-100 tracking-wide">
            {t.hero.badge}
          </span>
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up opacity-0">
          {t.hero.titleLine1}
          <br />
          <span className="text-gradient">{t.hero.titleLine2}</span>
        </h1>

        <p className="text-lg sm:text-xl text-deep-100 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-delay-1 opacity-0">
          {t.hero.body}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2 opacity-0">
          <a
            href="#fokus"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-abyss-400 hover:bg-abyss-300 text-abyss-950 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-abyss-400/30 hover:-translate-y-0.5"
          >
            {t.hero.explore}
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-abyss-50 hover:text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            {t.hero.contact}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-delay-3 opacity-0">
        <div className="w-6 h-10 rounded-full border-2 border-abyss-200/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-abyss-200/60 animate-float" />
        </div>
      </div>
    </section>
  );
}
