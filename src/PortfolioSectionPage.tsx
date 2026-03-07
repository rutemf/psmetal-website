import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioSection {
    title: string;
    images?: string[];
    subSections?: { title: string; images: string[] }[];
}

interface Props {
    portfolioSections: PortfolioSection[];
}

const PortfolioSectionPage: React.FC<Props> = ({ portfolioSections }) => {
    const { sectionId } = useParams<{ sectionId: string }>();
    const section = portfolioSections[Number(sectionId)];

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Flatten all images into a single list for lightbox navigation
    const allImages: string[] = section
        ? section.subSections
            ? section.subSections.flatMap(sub => sub.images)
            : section.images || []
        : [];

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowRight') setLightboxIndex(i => i !== null ? Math.min(i + 1, allImages.length - 1) : null);
            if (e.key === 'ArrowLeft') setLightboxIndex(i => i !== null ? Math.max(i - 1, 0) : null);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxIndex, allImages.length]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (lightboxIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [lightboxIndex]);

    if (!section) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <p className="text-gray-400">Secção não encontrada.</p>
            </div>
        );
    }

    const renderGrid = (images: string[], globalOffset: number) => (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, idx) => {
                const globalIdx = globalOffset + idx;
                return (
                    <button
                        key={idx}
                        onClick={() => setLightboxIndex(globalIdx)}
                        className="group relative overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        style={{ paddingBottom: '66%' }}
                    >
                        <img
                            src={img}
                            alt={`${section.title} ${globalIdx + 1}`}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0.2'; }}
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 px-3 py-1 rounded-full tracking-wide">
                Ampliar
              </span>
                        </div>
                    </button>
                );
            })}
        </div>
    );

    // Calculate offsets per subsection
    let offset = 0;

    return (
        <div className="min-h-screen bg-white">

            {/* Header */}
            <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16 gap-4">
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-gray-300 hover:text-blue-200 transition-colors text-sm font-medium"
                        >
                            <ArrowLeft size={16} />
                            Voltar
                        </Link>
                        <span className="text-slate-600">|</span>
                        <span className="text-gray-400 text-sm">Portfólio</span>
                        <span className="text-slate-600">|</span>
                        <span className="text-white text-sm font-medium">{section.title}</span>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-10">{section.title}</h1>

                {section.subSections && section.subSections.length > 0 ? (
                    <div className="space-y-12">
                        {section.subSections.map((sub, subIdx) => {
                            const currentOffset = offset;
                            offset += sub.images.length;
                            return (
                                <div key={subIdx}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-1 h-6 rounded-full bg-blue-400" />
                                        <h2 className="text-lg font-semibold text-gray-700 uppercase tracking-wide">
                                            {sub.title}
                                        </h2>
                                    </div>
                                    {renderGrid(sub.images, currentOffset)}
                                </div>
                            );
                        })}
                    </div>
                ) : section.images && section.images.length > 0 ? (
                    renderGrid(section.images, 0)
                ) : (
                    <p className="text-center text-gray-400 mt-12 italic">
                        Sem imagens disponíveis para esta secção.
                    </p>
                )}
            </main>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.92)' }}
                    onClick={() => setLightboxIndex(null)}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setLightboxIndex(null)}
                        className="absolute top-5 right-5 text-white bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-2 transition-all"
                    >
                        <X size={22} />
                    </button>

                    {/* Prev */}
                    {lightboxIndex > 0 && (
                        <button
                            onClick={e => { e.stopPropagation(); setLightboxIndex(i => i !== null ? i - 1 : null); }}
                            className="absolute left-4 text-white bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-3 transition-all"
                        >
                            <ChevronLeft size={28} />
                        </button>
                    )}

                    {/* Image */}
                    <img
                        src={allImages[lightboxIndex]}
                        alt="Imagem ampliada"
                        onClick={e => e.stopPropagation()}
                        className="max-w-5xl w-full max-h-screen object-contain rounded-lg shadow-2xl"
                        style={{ maxHeight: '88vh', padding: '1rem' }}
                    />

                    {/* Next */}
                    {lightboxIndex < allImages.length - 1 && (
                        <button
                            onClick={e => { e.stopPropagation(); setLightboxIndex(i => i !== null ? i + 1 : null); }}
                            className="absolute right-4 text-white bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full p-3 transition-all"
                        >
                            <ChevronRight size={28} />
                        </button>
                    )}

                    {/* Counter */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-sm bg-black bg-opacity-40 px-4 py-1 rounded-full">
                        {lightboxIndex + 1} / {allImages.length}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioSectionPage;