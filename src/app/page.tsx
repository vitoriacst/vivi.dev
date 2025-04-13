'use client'

import { useTranslation } from 'react-i18next';
import AboutMe from "./components/AboutMe/AboutMe";

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full p-4 h-full gap-4 flex flex-col">
        <AboutMe />
      </div>
    </main>
  );
}
