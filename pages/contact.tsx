import Navbar from '../components/Navbar';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Contact() {
  const { t } = useTranslation('common');
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50 pt-8">
        <h1 className="text-4xl font-bold mt-8 mb-6 text-red-800">{t('contact.title')}</h1>
        <div className="text-base text-gray-700 max-w-lg w-full">
          <div className="flex items-center mb-3">
            <span className="w-36 font-semibold text-right">{t('contact.email')}：</span>
            <a href="mailto:b11117011@live.yuntech.edu.tw" className="text-blue-600">b11117011@live.yuntech.edu.tw</a>
          </div>
          <div className="flex items-center mb-3">
            <span className="w-36 font-semibold text-right">{t('contact.github')}：</span>
            <a href="https://github.com/Jk9228" target="_blank" className="text-blue-600">github.com/Jk9228</a>
          </div>
          <div className="flex items-center mb-3">
            <span className="w-36 font-semibold text-right">{t('contact.phone')}：</span>
            <a href="tel:0908975023" className="text-blue-600">0908975023</a>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

