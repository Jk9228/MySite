import Navbar from '../components/Navbar';
import PortfolioCard from '../components/PortfolioCard';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const GITHUB_URL = 'https://github.com/Jk9228';

export default function Portfolio() {
  const { t } = useTranslation('common');
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-white py-8">
        <h1 className="text-4xl mt-12 font-bold mb-6 text-green-800">{t('portfolio.title')}</h1>
        <p className="text-gray-700 mb-6">{t('portfolio.intro')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PortfolioCard
            title="GitHub"
            description={t('portfolio.github')}
            url={GITHUB_URL}
            imageSrc="/assets/portfolio/github.jpg"
          />
          <PortfolioCard
            title="DeviceInfo"
            description="這是一個用swift做的MacOS App，支援USB接孔熱差拔即時辨識裝置（範例展示）。"
            imageSrc="/assets/portfolio/device-info.png"
          />
          <PortfolioCard
            title="DeviceInfo version 2"
            description="這是既上一個版本後改良出來的新版介面（範例展示）。"
            imageSrc="device-info-v2.png"
          />
          {/* 依需求新增更多作品展示 */}
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

