import Navbar from '../components/Navbar';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

export default function About() {
  const { t } = useTranslation('common');

  // Modal 狀態
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  // 證書資料，可依需求新增
  const certificates = [
    {
      src: '/assets/certificates/CPE_passed.jpg',
      title: 'CPE 檢定證書',
      desc: '通過 CPE 檢定考試。',
    },
    {
      src: '/assets/certificates/20251015_044235.jpg',
      title: '微控制器校園菁英班研習證書',
      desc: 'ARM Cortex M4F PIC32CX-SG Microcontroller, MCC Harmony and AI Code Assistant Training 研習證書',
    },
    {
      src: '/assets/certificates/TOEIC_11103.JPG',
      title: 'TOEIC 測驗',
      desc: 'TOEIC成績：425分。',
    },
    {
      src: '/assets/certificates/Certificate_of_National_Chinese_Proficiency.JPG',
      title: '全民中檢測驗',
      desc: '全民中檢中高等通過證書',
    },
    {
      src: '/assets/certificates/front_Digital_Electronics_Class_B.JPG',
      title: '數位電子乙級',
      desc: '我的數位電子乙級證照。',
    },
    {
      src: '/assets/certificates/front_Commercial_Wiring_Class_C.JPG',
      title: '室內配線丙級',
      desc: '我的室內配線丙級證照',
    },
    {
      src: '/assets/certificates/front_Industrial_Electronics_Class_C_10908.JPG',
      title: '工業電子丙級',
      desc: '我的工業電子丙級證照',
    },
    {
      src: '/assets/certificates/volunteer_basic_10910.JPG',
      title: '基礎志工',
      desc: '我的志工基礎結業證書',
    },
    {
      src: '/assets/certificates/Chinese_Taipei_International_Sport_Volunteer_Association_10807.JPG',
      title: '體育志工',
      desc: '我的體育志工研習證書',
    },
    {
      src: '/assets/certificates/ceremonial_corps—_10912.JPG',
      title: '儀隊參賽',
      desc: '我的儀隊參賽證明',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen py-8">
        <h1 className="text-4xl font-bold mt-8 mb-6 text-yellow-800">{t('about.title')}</h1>
        {/* 個人大頭照 */}
        <img src="/assets/profile.jpg" alt="個人大頭照" className="w-32 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-300 shadow" />
        {/* 自我介紹段落 */}
        <div className="text-base text-gray-700 max-w-2xl text-center mb-5">
          {t('about.description')}
        </div>
        {/* 自傳簡歷＆計畫書PDF下載區塊 */}
        <div className="my-6 flex flex-col md:flex-row gap-4 justify-center">
          <a href="/files/autobiography.pdf" target="_blank" className="px-5 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 transition">
            觀看/下載自傳簡歷 PDF
          </a>
          <a href="/files/research_plan.pdf" target="_blank" className="px-5 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 transition">
            觀看/下載學習研究計畫 PDF
          </a>
        </div>
        {/* 證書展示區（支援放大） */}
        <section className="my-10 w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 text-center">證書成就（點擊圖片可放大）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map((item, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-4 text-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="mx-auto mb-2 rounded h-32 object-contain cursor-pointer border-2 border-transparent hover:border-indigo-500 transition"
                  onClick={() => {
                    setModalImgSrc(item.src);
                    setModalTitle(item.title);
                    setModalDesc(item.desc);
                    setModalOpen(true);
                  }}
                />
                <div className="font-bold text-lg text-indigo-800 mb-1">{item.title}</div>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          {/* Modal 放大圖 */}
          {modalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-40"
              onClick={() => setModalOpen(false)}
            >
              <div
                className="bg-white rounded-lg p-6 max-w-md w-full text-center relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-500"
                  onClick={() => setModalOpen(false)}
                  aria-label="關閉放大圖">
                  ×
                </button>
                <img src={modalImgSrc} alt={modalTitle} className="mb-3 mx-auto w-full max-w-4xl max-h-[90vh] object-contain rounded shadow-lg" />
                <div className="font-bold text-xl text-indigo-700 mb-1">{modalTitle}</div>
                <p className="text-gray-700">{modalDesc}</p>
              </div>
            </div>
          )}
        </section>
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

