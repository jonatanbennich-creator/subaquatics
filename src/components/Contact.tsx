import { Mail, ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n';

export default function Contact() {
  const { t } = useLang();

  return (
    <section
      id="kontakt"
      className="relative py-24 lg:py-32 overflow-hidden bg-abyss-950"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5466506/pexels-photo-5466506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt={t.contact.bgAlt}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss-950 via-abyss-950/80 to-abyss-950" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-abyss-300 uppercase tracking-widest mb-4">
          {t.contact.label}
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-6">
          {t.contact.title}
        </h2>
        <p className="text-lg text-deep-100 leading-relaxed mb-10 max-w-xl mx-auto">
          {t.contact.body}
        </p>

        <a
          href="mailto:kontakt@flateas.se"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-abyss-400 hover:bg-abyss-300 text-abyss-950 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-abyss-400/30 hover:-translate-y-0.5 group"
        >
          <Mail className="w-5 h-5" />
          {t.contact.button}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}
