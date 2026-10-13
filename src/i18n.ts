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
      badge: 'Computer Vision för undervattensautonomi',
      titleLine1: 'Autonomi.',
      titleLine2: 'Under ytan.',
      body: 'Vi utvecklar autonomi för ROV — med computer vision som grund. För att lösa uppgiften har vi även utvecklat egna kameror.',
      explore: 'Utforska tekniken',
      contact: 'Kom i kontakt',
      bgAlt: 'Undervattenslandskap med solljus genom havet',
    },
    focus: {
      label: 'Vårt fokus',
      titleLine1: 'Autonomi i fokus.',
      titleLine2: 'Vision som grund.',
      body: 'Autonomin bygger på computer vision. Kamerorna är utvecklade för just den uppgiften — att ge systemet syn under ytan.',
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
      title: 'Vad vill du utforska?',
      body: 'Låt oss prata om nästa steg för ditt ROV-system.',
      button: 'Skicka ett mail',
      bgAlt: 'Ljus genom havet',
    },
    footer: {
      tagline: 'Autonomi för ROV · Computer vision som grund',
      copyright: 'Flateas SubAquatics',
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
      badge: 'Computer Vision for underwater autonomy',
      titleLine1: 'Autonomy.',
      titleLine2: 'Beneath the surface.',
      body: 'We develop autonomy for ROVs — with computer vision as the foundation. To solve the task, we have also developed our own cameras.',
      explore: 'Explore the technology',
      contact: 'Get in touch',
      bgAlt: 'Underwater landscape with sunlight through the ocean',
    },
    focus: {
      label: 'Our focus',
      titleLine1: 'Autonomy in focus.',
      titleLine2: 'Vision as the foundation.',
      body: 'The autonomy is built on computer vision. The cameras are developed for that very task — giving the system sight beneath the surface.',
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
      title: 'What do you want to explore?',
      body: "Let's talk about the next step for your ROV system.",
      button: 'Send an email',
      bgAlt: 'Light through the ocean',
    },
    footer: {
      tagline: 'Autonomy for ROVs · Computer vision as the foundation',
      copyright: 'Flateas SubAquatics',
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
