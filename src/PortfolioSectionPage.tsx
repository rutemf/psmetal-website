import React from 'react';
import { useParams } from 'react-router-dom';

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
    if (!section) return <p className="text-center mt-20">Secção não encontrada</p>;

    const renderImages = (images: string[], title: string) => {
        return images.map((img, idx) => (
            <img
                key={`${title}-${idx}`}
                src={img}
                alt={`${title} ${idx + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
                onError={(e) => {
                    console.log('Imagem não encontrada:', img);
                }}
            />
        ));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{section.title}</h2>

            {section.subSections && section.subSections.length > 0 ? (
                section.subSections.map((sub, subIdx) => (
                    <div key={subIdx} className="mb-12">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{sub.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {renderImages(sub.images, sub.title)}
                        </div>
                    </div>
                ))
            ) : section.images && section.images.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderImages(section.images, section.title)}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-12">Sem imagens disponíveis para esta secção.</p>
            )}
        </div>
    );
};

export default PortfolioSectionPage;