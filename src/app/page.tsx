'use client'

import { useTranslation } from 'react-i18next';
import AboutMe from "./components/AboutMe/AboutMe";
import Experiences from './components/Experiences/Experiences';
import ProjectsCards from './components/ProjectsCard/ProjectsCard';

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <main className="flex w-full flex-col items-center justify-center p-6">
      <div className="w-full max-w-[900px] flex flex-col md:flex-row gap-4">
        <div className="w-full flex flex-col gap-4 bg-white p-4 rounded-md">
          <AboutMe />
            <Experiences />
            <div className='flex items-center justify-center gap-2 flex-wrap'>
            <ProjectsCards title={t('projectsDescription.0.daaiProject')} description={t('projectsDescription.0.daaiDescription')} technologies='TypeScript.Tailwind.Stencil' link={t('projectsDescription.0.daaiLink')} />
            <ProjectsCards title={t('projectsDescription.0.beersApp')} description={t('projectsDescription.0.beersAppDescription')} technologies='JavaScript.Node.Jest' link={t('projectsDescription.0.beersAppLink')} />
            <ProjectsCards title={t('projectsDescription.0.giblhiFlix')} description={t('projectsDescription.0.giblhiFlixDescription')} technologies='TypeScript.Tailwind.Cypress' link={t('projectsDescription.0.giblhiFlixLink')} />
            </div>
        </div>
      </div>
    </main>
  );
}
