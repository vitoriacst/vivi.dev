'use client'

import { useTranslation } from 'react-i18next';
import AboutMe from "./components/AboutMe/AboutMe";
import Experiences from './components/Experiences/Experiences';
import ProjectsCards from './components/ProjectsCard/ProjectsCard';

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="w-full flex flex-col md:flex-row gap-4">

        {/* Coluna esquerda */}
        <div className="w-full md:min-w-1/2 flex flex-col gap-4">
          <AboutMe />
          <div className="flex flex-col gap-4 shadow-md rounded-md p-4 h-full">
            <Experiences />
          </div>
        </div>

        <div className="w-full md:min-w-1/2 flex flex-col gap-4">
          <div className="flex-col flex gap-4 shadow-md rounded-md p-4 h-full items-start justify-start">
          <h1 className="text-xl font-bold">{t('projects')}</h1>
          <div className="flex items-center justify-center gap-4 flex-wrap">
           <ProjectsCards title={t('projectsDescription.0.viviUi')} description={t('projectsDescription.0.viviUiDescription')} technologies='Next.js.Tailwind CSS.TypeScript' link={t('projectsDescription.0.link')} />
            <ProjectsCards title={t('projectsDescription.0.giblhiFlix')} description={t('projectsDescription.0.giblhiFlixDescription')} technologies='Next.js.Tailwind CSS.TypeScript' link={t('projectsDescription.0.link')} />
            <ProjectsCards title={t('projectsDescription.0.daaiProject')} description={t('projectsDescription.0.daaiDescription')} technologies='Next.js.Tailwind CSS.TypeScript' link={t('projectsDescription.0.link')} />
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
