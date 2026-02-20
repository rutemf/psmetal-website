import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { Phone, Mail, Linkedin, MapPin, Factory, Wrench, Shield, Award } from 'lucide-react';
import logotipo from './assets/logotipo.jpg';

// Dados
const services = [
  { icon: Factory, title: "Fabricação Industrial", description: "Estruturas metálicas robustas para indústrias e construção civil" },
  { icon: Wrench, title: "Soldadura Especializada", description: "Técnicas avançadas de soldadura TIG, MIG e eletrodo revestido" },
  { icon: Shield, title: "Tratamento Anticorrosivo", description: "Galvanização e pintura industrial para máxima durabilidade" },
  { icon: Award, title: "Certificação de Qualidade", description: "Todos os trabalhos seguem normas ISO e certificações europeias" }
];

const portfolioSections = [
  {
    title: "Corte a Laser 6 Kw",
    images: [
      '/assets/corteLaser6Kw/_dsc0220.JPG',
      '/assets/corteLaser6Kw/_dsc0237.JPG',
      '/assets/corteLaser6Kw/_dsc02201.jpg',
      '/assets/corteLaser6Kw/_dsc02371.jpg',
      '/assets/corteLaser6Kw/maquina.jpg',
      '/assets/corteLaser6Kw/corte_laser.jpg',
    ],
  },
  {
    title: "Produto Chave Na Mão",
    images: [
      "https://images.pexels.com/photos/7.jpeg",
      "https://images.pexels.com/photos/8.jpeg",
      "https://images.pexels.com/photos/9.jpeg",
      "https://images.pexels.com/photos/10.jpeg",
      "https://images.pexels.com/photos/11.jpeg",
      "https://images.pexels.com/photos/12.jpeg",
    ],
  },
  {
    title: "Quinagem e Estampagem",
    images: [
      "https://images.pexels.com/photos/13.jpeg",
      "https://images.pexels.com/photos/14.jpeg",
      "https://images.pexels.com/photos/15.jpeg",
      "https://images.pexels.com/photos/16.jpeg",
      "https://images.pexels.com/photos/17.jpeg",
      "https://images.pexels.com/photos/18.jpeg",
    ],
  },
  {
    title: "Revestimentos Superficiais",
    images: [
      "https://images.pexels.com/photos/19.jpeg",
      "https://images.pexels.com/photos/20.jpeg",
      "https://images.pexels.com/photos/21.jpeg",
      "https://images.pexels.com/photos/22.jpeg",
      "https://images.pexels.com/photos/23.jpeg",
      "https://images.pexels.com/photos/24.jpeg",
    ],
  },
  {
    title: "Torneamento E Fresagem CNC",
    images: [
      "https://images.pexels.com/photos/25.jpeg",
      "https://images.pexels.com/photos/26.jpeg",
      "https://images.pexels.com/photos/27.jpeg",
      "https://images.pexels.com/photos/28.jpeg",
      "https://images.pexels.com/photos/29.jpeg",
      "https://images.pexels.com/photos/30.jpeg",
      "https://images.pexels.com/photos/31.jpeg",
      "https://images.pexels.com/photos/32.jpeg",
    ],
  },
  {
    title: "Soldadura",
    images: [
      "https://images.pexels.com/photos/33.jpeg",
      "https://images.pexels.com/photos/34.jpeg",
      "https://images.pexels.com/photos/35.jpeg",
      "https://images.pexels.com/photos/36.jpeg",
      "https://images.pexels.com/photos/37.jpeg",
      "https://images.pexels.com/photos/38.jpeg",
    ],
  },
];

// Página individual do portfólio
const PortfolioSectionPage: React.FC<{ portfolioSections: typeof portfolioSections }> = ({ portfolioSections }) => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = portfolioSections[Number(sectionId)];
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
};

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          {/* Página principal */}
          <Route
              path="/"
              element={
                <div className="min-h-screen bg-white">
                  {/* Header */}
                  <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                          <img src={logotipo} alt="Logo" className="h-10 mr-3" />
                        </div>
                        <nav className="hidden md:flex space-x-8">
                          <a href="#inicio" className="hover:text-orange-400 transition-colors">Início</a>
                          <a href="#visao" className="hover:text-orange-400 transition-colors">Visão</a>
                          <a href="#portfolio" className="hover:text-orange-400 transition-colors">Portfólio</a>
                          <a href="#contactos" className="hover:text-orange-400 transition-colors">Contactos</a>
                        </nav>
                      </div>
                    </div>
                  </header>

                  {/* Hero Section */}
                  <section id="inicio" className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-24">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}
                    ></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Excelência em <span className="text-orange-500">Metalúrgia</span>
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Engineering for you
                      </p>
                    </div>
                  </section>

                  {/* Visão */}
                  <section id="visao" className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Visão</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          A nossa visão é ser líder na inovação em soluções de metalomecânica de precisão, garantindo excelência, sustentabilidade e parcerias duradouras com os nossos clientes.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Serviços */}
                  <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Os Nossos Serviços</h2>
                        <p className="text-xl text-gray-600">Soluções completas em metalúrgia para todos os setores</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                <service.icon className="w-6 h-6 text-orange-600" />
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                              <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Portfólio - quadrados clicáveis */}
                  <section id="portfolio" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfólio</h2>
                        <p className="text-xl text-gray-600">Clique numa secção para ver as imagens</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioSections.map((section, idx) => (
                            <Link
                                to={`/portfolio/${idx}`}
                                key={idx}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                              <div className="relative h-48">
                                <img
                                    src={section.images[0]}
                                    alt={section.title}
                                    className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                              </div>
                            </Link>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Contactos */}
                  <section id="contactos" className="py-20 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Contactos</h2>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                          <div className="flex items-start space-x-4">
                            <Phone className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                              <p className="text-gray-300">+351 252 613 714</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <Mail className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-xl font-semibold mb-2">Email</h3>
                              <p className="text-gray-300">geral@ps-metal.pt</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <Linkedin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                              <p className="text-gray-300">https://www.linkedin.com/company/p-s-metal-lda/</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div className="flex items-start space-x-4">
                            <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-xl font-semibold mb-2">Morada</h3>
                              <p className="text-gray-300">
                                Praceta do Cubo, 185<br />
                                4570-060 Balazar, Póvoa de Varzim
                              </p>
                            </div>
                          </div>

                          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11967.964409087908!2d-8.655768374854123!3d41.41771181725478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2445d837bbbf35%3A0x2e86642ce7e42606!2sP%26S%20Metal%2C%20Lda!5e0!3m2!1spt-PT!2spt!4v1771625886085!5m2!1spt-PT!2spt"
                                width="100%"
                                height="100%"
                                className="border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização PS Metal"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              }
          />

          {/* Página individual do portfólio */}
          <Route path="/portfolio/:sectionId" element={<PortfolioSectionPage portfolioSections={portfolioSections} />} />
        </Routes>
      </Router>
  );
};

export default App;