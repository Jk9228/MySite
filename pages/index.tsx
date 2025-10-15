import Navbar from '../components/Navbar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50 pt-8">
        <h1 className="text-4xl font-bold mt-8 mb-6 text-blue-800">{t('home.title')}</h1>
        <p className="text-lg text-gray-700 max-w-xl text-center">{t('home.welcome')}</p>
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

