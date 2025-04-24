'use client'

import { useTranslation } from 'react-i18next';
import AboutMe from "./components/AboutMe/AboutMe";
import Experiences from './components/Experiences/Experiences';
import ProjectsCards from './components/ProjectsCard/ProjectsCard';
import { useAppSelector } from './store/store';

export default function Home() {
  const { t } = useTranslation('common')
  const pageManagement = useAppSelector((state) => state.visibility.page);

  return (
    <main className="flex w-full flex-col items-center justify-center p-6">
      <div className="w-full max-w-[900px] flex flex-col md:flex-row gap-4">
        <div className="w-full flex flex-col gap-4 bg-white p-6 rounded-md">
          <AboutMe />
        </div>
      </div>
      <div className="mt-4 w-full max-w-[900px] flex flex-col md:flex-row gap-4 h-full md:h-96">
      <div className="w-full flex items-center justify-center gap-4 bg-white p-6 rounded-md h-full">
      {
        pageManagement === 'projects' && (
          <div className="flex gap-2">
            <ProjectsCards
              title={t('projectsDescription.0.daaiProject')}
              description={t('projectsDescription.0.daaiDescription')}
              technologies='TypeScript.Tailwind.Stencil'
              link={t('projectsDescription.0.daaiLink')}
            />
            <ProjectsCards
              title={t('projectsDescription.0.beersApp')}
              description={t('projectsDescription.0.beersAppDescription')}
              technologies='JavaScript.Node.Jest'
              link={t('projectsDescription.0.beersAppLink')}
            />
            <ProjectsCards
              title={t('projectsDescription.0.giblhiFlix')}
              description={t('projectsDescription.0.giblhiFlixDescription')}
              technologies='TypeScript.Tailwind.Cypress'
              link={t('projectsDescription.0.giblhiFlixLink')}
            />
          </div>
        )
      }

      {
        pageManagement === 'about' && (
          <div>
            <Experiences />
            I decided to join Trybe in the year 2021 in the month of November, during my operation in Systems Analysis and Development. deciding during this journey, to share a little of my trajectory on youtube, which has already been helping many people. I've always been very curious and creative, so the schedule fell in line with what I wanted for the rest of my life. I really like inspiring people to follow their dreams and achieve their goals! I'm for technology and the world of games, having a great list of favorites!
          </div>
        )
      }

      {
        pageManagement === 'contact' && (
          <div>
            contato
          </div>
        )
      }
    </div>
    </div>
    </main>
  );
}
