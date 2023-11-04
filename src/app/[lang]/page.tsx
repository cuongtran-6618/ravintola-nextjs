import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import LocaleSwitcher from './components/locale-switcher'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>      
    </div>
  )
}