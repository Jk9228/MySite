import Navbar from '../components/Navbar';
import FadeInUp from '../components/FadeInUp';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Contact() {
  const { t } = useTranslation('common');
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50 pt-8">
        {/* 主要標題 */}
        <FadeInUp delay={0.01}>
          <h1 className="text-5xl font-bold mt-8 mb-6 text-red-800 text-center">
            {t('contact.title')}
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.03}>
          <p className="text-xl text-gray-700 max-w-2xl text-center mb-12 leading-relaxed">
            歡迎與我聯繫！我樂於討論技術、合作機會或任何有趣的專案。
          </p>
        </FadeInUp>

        {/* 聯絡資訊卡片 */}
        <FadeInUp delay={0.05}>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-4 mb-12 w-full">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">聯絡方式</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 基本聯絡資訊 */}
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <div className="text-3xl mr-4">📧</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">電子郵件</h3>
                    <a 
                      href="mailto:b11117011@live.yuntech.edu.tw" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      b11117011@live.yuntech.edu.tw
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <div className="text-3xl mr-4">📱</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">電話</h3>
                    <a 
                      href="tel:0908975023" 
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      0908975023
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                  <div className="text-3xl mr-4">💻</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">GitHub</h3>
                    <a 
                      href="https://github.com/Jk9228" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      github.com/Jk9228
                    </a>
                  </div>
                </div>
              </div>

              {/* 聯絡表單區域 */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">快速聯絡</h3>
                <p className="text-gray-600 mb-4">
                  請透過以下方式與我聯繫，我會盡快回覆您的訊息。
                </p>
                <div className="space-y-3">
                  <a 
                    href="mailto:b11117011@live.yuntech.edu.tw?subject=網站聯絡&body=您好，我想與您討論..."
                    className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    📧 發送郵件
                  </a>
                  <a 
                    href="tel:0908975023"
                    className="block w-full bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    📞 撥打電話
                  </a>
                  <a 
                    href="https://github.com/Jk9228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-800 text-white text-center py-3 rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    💻 查看 GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* 回應時間說明 */}
        <FadeInUp delay={0.07}>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-4 mb-12">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">回應時間</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-800 mb-2">緊急事項</h3>
                <p className="text-sm text-gray-600">電話聯絡<br />立即回應</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-bold text-gray-800 mb-2">一般詢問</h3>
                <p className="text-sm text-gray-600">電子郵件<br />24小時內回應</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="font-bold text-gray-800 mb-2">專案合作</h3>
                <p className="text-sm text-gray-600">詳細討論<br />48小時內回應</p>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* 其他資訊 */}
        <FadeInUp delay={0.09}>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-4 mb-12">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">其他資訊</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">📍 位置</h3>
                <p className="text-gray-600">台灣雲林縣</p>
                <p className="text-gray-600">雲林科技大學</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">🕒 最佳聯絡時間</h3>
                <p className="text-gray-600">週一至週五：09:00 - 18:00</p>
                <p className="text-gray-600">週末：彈性時間</p>
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

