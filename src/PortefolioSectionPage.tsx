import React from 'react';
import { useParams } from 'react-router-dom';

function PortfolioSectionPage({ portfolioSections }) {
    const { sectionId } = useParams();

    const section = portfolioSections[sectionId];
    if (!section) return <p className="text-center mt-20">Secção não encontrada</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(section.images || []).map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`${section.title} ${idx + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                ))}
            </div>
        </div>
    );
}

export default PortfolioSectionPage;