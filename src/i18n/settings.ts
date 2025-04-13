import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    common: {
      greeting: 'Hello,',
      apresentation: 'I am Vitória Holanda',
      position: 'Software Developer',
      aboutMe: 'Software developer with more than two years of experience in technologies like React, TypeScript, JavaScript, Node.js, Python and various other modern stacks.',
    }
  },
  pt: {
    common: {
      greeting: 'Olá,',
      apresentation: 'Eu sou a  Vitória Holanda',
      position: 'Desenvolvedora de software',
      aboutMe: 'Desenvolvedora de software full stack com mais de dois anos de experiência em tecnologias como React, TypeScript, JavaScript, Node.js, Python e diversas outras stacks modernas.',
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
