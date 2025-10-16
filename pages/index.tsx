import Navbar from '../components/Navbar';
import FadeInUp from '../components/FadeInUp';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50 pt-8">
        {/* 主要標題區域 */}
        <FadeInUp delay={0.01}>
          <h1 className="text-5xl font-bold mt-8 mb-6 text-blue-800 text-center">
            {t('home.title')}
          </h1>
        </FadeInUp>
        
        <FadeInUp delay={0.03}>
          <p className="text-xl text-gray-700 max-w-2xl text-center mb-12 leading-relaxed">
            {t('home.welcome')}
          </p>
        </FadeInUp>

        {/* 個人簡介卡片 */}
        <FadeInUp delay={0.05}>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-4 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="/assets/profile.jpg" 
                  alt="個人照片" 
                  className="w-48 h-60 rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">關於我</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  我是一位熱愛技術的學生，專精於軟體開發與電子工程。擁有豐富的程式設計經驗，
                  包括 Swift、JavaScript、Python 等語言，以及多項專業證照。
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    Swift 開發
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    Web 開發
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    電子工程
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                    多語系支援
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* 快速導航 */}
        <FadeInUp delay={0.07}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-4 mb-12">
            <a 
              href="/about" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-2xl mb-2">👨‍💻</div>
              <h3 className="text-xl font-bold mb-2">關於我</h3>
              <p className="text-blue-100">查看我的詳細介紹與證照</p>
            </a>
            
            <a 
              href="/portfolio" 
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-2xl mb-2">💼</div>
              <h3 className="text-xl font-bold mb-2">作品集</h3>
              <p className="text-green-100">瀏覽我的專案作品</p>
            </a>
            
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-xl font-bold mb-2">聯絡我</h3>
              <p className="text-purple-100">取得聯繫方式</p>
            </a>
          </div>
        </FadeInUp>

        {/* 技能展示 */}
        <FadeInUp delay={0.09}>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-4 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">核心技能</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🍎</div>
                <h3 className="font-bold text-gray-800">iOS 開發</h3>
                <p className="text-sm text-gray-600">Swift, Xcode</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="font-bold text-gray-800">Web 開發</h3>
                <p className="text-sm text-gray-600">React, Next.js</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-800">電子工程</h3>
                <p className="text-sm text-gray-600">硬體設計</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-bold text-gray-800">多語系</h3>
                <p className="text-sm text-gray-600">中英文支援</p>
              </div>
            </div>
          </div>
        </FadeInUp>
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

