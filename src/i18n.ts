import { createContext, useContext } from 'react';

export type Lang = 'sv' | 'en';

export interface Translation {
  nav: {
    fokus: string;
    teknik: string;
    kontakt: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    explore: string;
    contact: string;
    bgAlt: string;
  };
  focus: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    features: { title: string; description: string }[];
  };
  contact: {
    label: string;
    title: string;
    body: string;
    button: string;
    bgAlt: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export const translations: Record<Lang, Translation> = {
  sv: {
    nav: {
      fokus: 'Fokus',
      teknik: 'Teknik',
      kontakt: 'Kontakt',
      cta: 'Kom i kontakt',
    },
    hero: {
      badge: 'Computer Vision och autonomi under ytan',
      titleLine1: 'Autonomi.',
      titleLine2: 'Under ytan.',
      body: 'Utveckling av autonomi för undervattensapplikationer — Computer vision som grund och smarta hjälpsystem som mål. Systemutveckling med hårdvara och mjukvara.',
      explore: 'Utforska tekniken',
      contact: 'Kom i kontakt',
      bgAlt: 'Undervattenslandskap med solljus genom havet',
    },
    focus: {
      label: 'Vårt fokus',
      titleLine1: 'Autonomi i fokus.',
      titleLine2: 'Vision som grund.',
      body: 'Autonomi byggd på computer vision. Kameror och system utvecklade för uppgiften att ge mervärde under ytan.',
      features: [
        {
          title: 'Autonomi för ROV',
          description: 'Computer vision som grund för perception, beslutsfattande och styrning i undervattensmiljö.',
        },
        {
          title: 'Kameror för uppgiften',
          description: 'Kamerateknik utvecklad för att ge autonomin sin visuella grund — bild och beslut i samma system.',
        },
        {
          title: 'I testfas',
          description: 'Systemet är i testfas och ännu inte tillgängligt på öppna marknaden.',
        },
      ],
    },
    contact: {
      label: 'Kontakt',
      title: 'Är du intresserad av projektet?',
      body: 'Vi älskar samarbeten och pratar gärna om våra system.',
      button: 'Skicka ett mail',
      bgAlt: 'Ljus genom havet',
    },
    footer: {
      tagline: 'Autonomi för ROV · Computer vision som grund',
      copyright: 'Flateas SubAqua',
    },
  },
  en: {
    nav: {
      fokus: 'Focus',
      teknik: 'Technology',
      kontakt: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      badge: 'Computer Vision and autonomy beneath the surface',
      titleLine1: 'Autonomy.',
      titleLine2: 'Beneath the surface.',
      body: 'Development of autonomy for underwater applications — computer vision as the foundation and smart assistive systems as the goal. System development with hardware and software.',
      explore: 'Explore the technology',
      contact: 'Get in touch',
      bgAlt: 'Underwater landscape with sunlight through the ocean',
    },
    focus: {
      label: 'Our focus',
      titleLine1: 'Autonomy in focus.',
      titleLine2: 'Vision as the foundation.',
      body: 'Autonomy built on computer vision. Cameras and systems developed for the task of adding value beneath the surface.',
      features: [
        {
          title: 'Autonomy for ROVs',
          description: 'Computer vision as the foundation for perception, decision-making, and control in underwater environments.',
        },
        {
          title: 'Cameras for the task',
          description: 'Camera technology developed to give the autonomy its visual foundation — image and decisions in the same system.',
        },
        {
          title: 'In testing',
          description: 'The system is in the testing phase and not yet available on the open market.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Are you interested in the project?',
      body: 'We love collaborations and are happy to talk about our systems.',
      button: 'Send an email',
      bgAlt: 'Light through the ocean',
    },
    footer: {
      tagline: 'Autonomy for ROVs · Computer vision as the foundation',
      copyright: 'Flateas SubAqua',
    },
  },
};

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}

export const LangContext = createContext<LangContextValue>({
  lang: 'sv',
  setLang: () => {},
  t: translations.sv,
});

export function useLang() {
  return useContext(LangContext);
}
