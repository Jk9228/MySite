import { useState } from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  url?: string;
  imageSrc?: string;
}

export default function PortfolioCard({ title, description, url, imageSrc }: PortfolioCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const cardContent = (
    <div className="block w-full max-w-md rounded-lg border border-gray-200 shadow-md mb-5 p-6 hover:bg-blue-50 transition-colors cursor-pointer">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded mb-3"
          onClick={url ? undefined : () => setModalOpen(true)}
        />
      )}
      <div className="font-bold text-lg mb-1 text-blue-700">{title}</div>
      <div className="text-gray-800 text-base mb-2">{description}</div>
      {url && <div className="text-blue-500 underline">前往</div>}
    </div>
  );

  return (
    <>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {cardContent}
        </a>
      ) : (
        <div onClick={() => setModalOpen(true)}>{cardContent}</div>
      )}
      {modalOpen && imageSrc && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-40"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-2xl w-full text-center relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-500"
              onClick={() => setModalOpen(false)}
              aria-label="關閉放大圖"
            >
              ×
            </button>
            <img src={imageSrc} alt={title} className="mb-3 mx-auto w-full max-w-2xl max-h-[90vh] object-contain rounded shadow-lg" />
            <div className="font-bold text-xl text-blue-700 mb-1">{title}</div>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}

