'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '../../../../i18n-config';
import Image from 'next/image';
import englishFlagPath from '../../../../public/images/flags/en.png';
import finlandFlagPath from '../../../../public/images/flags/fi.png';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  } 
  return (
    <div>
      <p>Locale switcher:</p>
      <ul className='list-none'>
        {i18n.locales.map((locale) => {
          let flagPath;
          switch(locale) {
            case 'en':
              flagPath = englishFlagPath;
              break;
            default:
              flagPath = finlandFlagPath;
              break;
          }      

          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>
                <Image src={flagPath} alt={locale} width={24}/>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}