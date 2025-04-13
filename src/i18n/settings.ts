import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    common: {
      greeting: 'Hello,',
      apresentation: 'I am Vitória Holanda',
      position: 'Software Developer',
      aboutMe: 'Software developer with more than two years of experience in technologies like React, TypeScript, JavaScript, Node.js, Python and various other modern stacks.',
      projects: 'My Projects',
      projectsDescription: [
        {
          viviUi: "Vivi.ui",
          viviUiDescription: "Vivi.ui is a component library I created to support and accelerate my projects.",

          giblhiFlix: "Giblhi Flix",
          giblhiFlixDescription: "Giblhi Flix is a website I built to practice my skills with React, TypeScript, and JavaScript — themed around Studio Ghibli.",

          daaiProject: "Daai Component",
          daaiDescription: "Daai Component is an open-source project I created while working at Doctor Assistant. It focuses on externalizing an AI-powered component to be integrated into other systems.",
        }
      ],
      experiences: 'My Experiences',
      experiencesDescription: 'I have been working with software development for over 2 years. I have worked with different technologies and languages, but my favorite is React.',
    }
  },
  pt: {
    common: {
      greeting: 'Olá,',
      apresentation: 'Eu sou a  Vitória Holanda',
      position: 'Desenvolvedora de software',
      aboutMe: 'Desenvolvedora de software full stack com mais de dois anos de experiência em tecnologias como React, TypeScript, JavaScript, Node.js, Python e diversas outras stacks modernas.',
      projects: 'Meus Projetos',
      projectsDescription: [
        {
          viviUi: 'Vivi.ui',
          viviUiDescription: 'Vivi.ui é uma biblioteca de componentes que eu criei para ajudar meus projetos.',
          giblhiFlix: 'Giblhi Flix',
          giblhiFlixDescription: 'Giblhi Flix é um site que fiz para praticar minhas habilidades com React, TypeScript, JavaScript. com a tematíca do studio Ghibli.',
          daaiProject: 'Daai component',
          daaiDescription: 'Daai component foi um projeto open source criado durante o meu trabalho na empresa doctor assistant, focado em externalizar um componente com um inteligência artificial para outros sistemas.',
        }
      ],
      experiences: 'Minhas Experiências',
      experiencesDescription: 'Sou desenvolvedora full stack com experiência sólida em tecnologias modernas como React + TypeScript, Python (FastAPI), Vue.js, Stencil.js, MySQL, PostgreSQL, AWS Cloud e Retool. Ao longo da minha trajetória, atuei tanto no frontend quanto no backend, entregando soluções escaláveis, acessíveis e bem documentadas',
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
