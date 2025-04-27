import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    common: {
      greeting: 'Hello,',
      apresentation: 'I am Vitória Holanda',
      position: 'Software Developer',
      aboutMe: 'I embarked on the development universe to transform lines of code into portals of possibilities — each project, a new adventure in search of solutions that delight and transform.',
      projects: 'My Projects',
      seeMoreButton: 'See More',
      projectsDescription: [
        {
          musicPlataform: 'Music Plataform',
          musicPlataformDescription: 'Music Plataform was the development of a music app similar to Spotify, where I consumed an API and used its responses.',
          musicPlataformLink: "https://github.com/vitoriacst/Music_Plataform",
          daaiProject: "Daai Component",
          daaiDescription: "Daai Component is an open-source project I created while working at Doctor Assistant. It focuses on externalizing an AI-powered component to be integrated into other systems.",
          daaiLink: "https://www.npmjs.com/package/@doctorassistant/daai-component",
          beersApp: "App Delivery Beers",
          beersAppDescription: "Beers App is a website I built to practice my skills with React, TypeScript, and JavaScript — themed around Studio Ghibli.",
          beersAppLink: "https://github.com/vitoriacst/App_delivery_Beers",
        }
      ],
      experiences: 'My Experiences',
      experiencesDescription: 'I am a full stack developer with solid experience in modern technologies such as React + TypeScript, Python (FastAPI), Vue.js, Stencil.js, MySQL, PostgreSQL, AWS Cloud and Retool. Throughout my career, I have worked on both the frontend and backend, delivering scalable, accessible and well-documented solutions.',
      download:'Resume'
    }
  },
  pt: {
    common: {
      greeting: 'Olá,',
      apresentation: 'Eu sou a  Vitória Holanda',
      position: 'Desenvolvedora de software',
      aboutMe: 'Embarquei no universo do desenvolvimento para transformar linhas de código em portais de possibilidades — cada projeto, uma nova aventura em busca de soluções que encantam e transformam.',
      projects: 'Meus Projetos',
      seeMoreButton: 'Ver mais',
      projectsDescription: [
        {

          musicPlataform: 'Plataforma de música',
          musicPlataformDescription: 'music plataform houve a criação de uma aplicação voltada para um aplicativo de música semelhante ao spotify , nele consumi uma api e utilzei os seus retornos.',
          musicPlataformLink: "https://github.com/vitoriacst/Music_Plataform",
          daaiProject: 'Daai component',
          daaiDescription: 'Daai component foi um projeto open source criado durante o meu trabalho na empresa doctor assistant, focado em externalizar um componente com um inteligência artificial para outros sistemas.',
          beersApp: 'App de delivery de bebidas',
          daaiLink: "https://www.npmjs.com/package/@doctorassistant/daai-component",
          beersAppDescription: 'Beers App é um site que fiz para praticar minhas habilidades com React, TypeScript, JavaScript. com a tematíca do studio Ghibli.',
          beersAppLink: "https://github.com/vitoriacst/App_delivery_Beers",
        }
      ],
      experiences: 'Minhas Experiências',
      experiencesDescription: 'Sou desenvolvedora full stack com experiência sólida em tecnologias modernas como React + TypeScript, Python (FastAPI), Vue.js, Stencil.js, MySQL, PostgreSQL, AWS Cloud e Retool. Ao longo da minha trajetória, atuei tanto no frontend quanto no backend, entregando soluções escaláveis, acessíveis e bem documentadas',
      download:'Currículo'
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
