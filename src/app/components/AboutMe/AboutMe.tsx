import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation('common')

  return (
    <section className="flex flex-col items-start w-full justify-start">
    <div className="mb-2">
    <img src="/logo.png" alt="Vitória Holanda" className="h-12" />
    </div>
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-bold"> {t('greeting')}  {t('apresentation')}</h1>
        <h2 className="text-xl font-semibold">{t('position')}</h2>
        <p className="text-sm">{t('aboutMe')}</p>
    </div>
  </section>
  );
}
