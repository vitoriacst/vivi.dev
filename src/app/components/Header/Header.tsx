'use client'

import { ThemeToggle } from '@/components/ThemeToggle';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation('common')

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className="flex justify-between items-center font-semibold py-2 px-4 gap-4 w-full">
      <h1>Vivi.dev</h1>
      <div className="flex items-center gap-4">
        <ThemeToggle/>
          <button>Sobre</button>
          <button>Projetos</button>
          <button>Contato</button>
        <div className="flex gap-2">
          <button
            onClick={() => changeLanguage('en')}
            className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('pt')}
            className={`px-2 py-1 rounded ${i18n.language === 'pt' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            PT
          </button>
        </div>
      </div>
    </header>
  );
}
