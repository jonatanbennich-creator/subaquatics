import { Compass, Camera, FlaskConical } from 'lucide-react';
import { useLang } from '@/i18n';

const icons = [Compass, Camera, FlaskConical];

export default function Focus() {
  const { t } = useLang();

  return (
    <section id="fokus" className="relative py-24 lg:py-32 bg-abyss-950 overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 caustic-overlay opacity-60" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-abyss-600/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-abyss-300 uppercase tracking-widest mb-4">
            {t.focus.label}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-6">
            {t.focus.titleLine1}
            <br />
            <span className="text-gradient">{t.focus.titleLine2}</span>
          </h2>
          <p className="text-lg text-deep-100 leading-relaxed">
            {t.focus.body}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6" id="teknik">
          {t.focus.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <div
                key={feature.title}
                className="group glass rounded-2xl p-8 hover:border-abyss-300/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-abyss-400/20 to-abyss-600/20 border border-abyss-300/20 flex items-center justify-center mb-6 group-hover:from-abyss-400/30 group-hover:to-abyss-600/30 transition-all duration-500">
                  <Icon className="w-6 h-6 text-abyss-300 group-hover:text-abyss-200 transition-colors duration-300" strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-deep-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
