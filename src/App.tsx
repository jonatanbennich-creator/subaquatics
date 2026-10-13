import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Focus from '@/components/Focus';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LangContext, translations, type Lang } from '@/i18n';

function App() {
  const [lang, setLang] = useState<Lang>('sv');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === 'sv'
        ? 'Flateas SubAquatics — Autonomi för ROV'
        : 'Flateas SubAquatics — Autonomy for ROVs';
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <div className="min-h-screen bg-abyss-950 text-white selection:bg-abyss-400/30">
        <Navbar />
        <main>
          <Hero />
          <Focus />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangContext.Provider>
  );
}

export default App;
