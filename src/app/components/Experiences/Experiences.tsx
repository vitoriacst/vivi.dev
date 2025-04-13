import { t } from "i18next";

export default function Experiences() {
  return (
    <section>
      <h1 className="text-2sm font-bold">{t('experiences')}</h1>
      <p>
       {t('experiencesDescription')}
      </p>
    </section>
  )
}
