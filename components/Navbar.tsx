import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function Navbar() {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');
  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-10">
      <div className="font-bold text-xl text-blue-800">{t('nav.brand')}</div>
      <div className="flex space-x-6">
        <Link href="/"><span className="hover:text-blue-500">{t('nav.home')}</span></Link>
        <Link href="/about"><span className="hover:text-yellow-600">{t('nav.about')}</span></Link>
        <Link href="/portfolio"><span className="hover:text-green-600">{t('nav.portfolio')}</span></Link>
        <Link href="/contact"><span className="hover:text-red-600">{t('nav.contact')}</span></Link>
      </div>
      <div className="flex gap-2">
        <button onClick={() => changeLanguage('zh')} className={router.locale === 'zh' ? 'font-semibold underline' : ''}>繁中</button>
        <button onClick={() => changeLanguage('en')} className={router.locale === 'en' ? 'font-semibold underline' : ''}>EN</button>
      </div>
    </nav>
  );
}

