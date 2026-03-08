import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Mail, Linkedin, MapPin, Factory, Wrench, Shield, Award } from 'lucide-react';
import logotipo from './assets/logoSemFundo.png';
import fundo from './assets/fundo.jpg';
import PortfolioSectionPage from './PortfolioSectionPage';

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
      "/assets/produtoChaveNaMao/_DSC0223.JPG",
      "/assets/produtoChaveNaMao/_DSC0226.JPG",
      "/assets/produtoChaveNaMao/_DSC0227.JPG",
      "/assets/produtoChaveNaMao/_DSC02231.jpg",
      "/assets/produtoChaveNaMao/_DSC02261.jpg",
      "/assets/produtoChaveNaMao/_DSC02271.jpg",
    ],
  },
  {
    title: "Quinagem e Estampagem",
    images: [
      "/assets/quinagemEEstampagem/_DSC0212.JPG",
      "/assets/quinagemEEstampagem/_DSC0213.JPG",
      "/assets/quinagemEEstampagem/_DSC0215.JPG",
      "/assets/quinagemEEstampagem/_DSC02121.jpg",
      "/assets/quinagemEEstampagem/_DSC02131.jpg",
      "/assets/quinagemEEstampagem/_DSC02151.jpg",
    ],
  },
  {
    title: "Revestimentos Superficiais",
    images: [
      "/assets/revestimentosSuperficiais/_DSC0216.JPG",
      "/assets/revestimentosSuperficiais/_DSC0229.JPG",
      "/assets/revestimentosSuperficiais/_DSC0232.JPG",
      "/assets/revestimentosSuperficiais/_DSC02161.jpg",
      "/assets/revestimentosSuperficiais/_DSC02291.jpg",
      "/assets/revestimentosSuperficiais/_DSC02321.jpg",
    ],
  },
  {
    title: "Torneamento E Fresagem CNC",
    images: [
      "/assets/torneamentoEFresagemCNC/_DSC0217.JPG",
      "/assets/torneamentoEFresagemCNC/_DSC0218.JPG",
      "/assets/torneamentoEFresagemCNC/_DSC0231.JPG",
      "/assets/torneamentoEFresagemCNC/_DSC0235.JPG",
      "/assets/torneamentoEFresagemCNC/_DSC02171.jpg",
      "/assets/torneamentoEFresagemCNC/_DSC02181.jpg",
      "/assets/torneamentoEFresagemCNC/_DSC02311.jpg",
      "/assets/torneamentoEFresagemCNC/_DSC02351.jpg",
    ],
  },
  {
    title: "Soldadura",
    subSections: [
      {
        title: "Soldadura Laser",
        images: [
          "/assets/soldadura/laser/_DSC0250.JPG",
          "/assets/soldadura/laser/_DSC02501.jpg"
        ]
      },
      {
        title: "Soldadura TIG",
        images: [
          "/assets/soldadura/tig/_DSC0257.JPG",
          "/assets/soldadura/tig/_DSC02571.jpg",
        ]
      },
      {
        title: "Soldadura MIG MAG",
        images: [
          "/assets/soldadura/migMag/_DSC0248.JPG",
          "/assets/soldadura/migMag/_DSC02481.jpg",
        ]
      }
    ],
  },
];

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
                          <a href="#inicio" className="hover:text-blue-200 transition-colors">Início</a>
                          <a href="#visao" className="hover:text-blue-200 transition-colors">Visão</a>
                          <a href="#portfolio" className="hover:text-blue-200 transition-colors">Portfólio</a>
                          <a href="#contactos" className="hover:text-blue-200 transition-colors">Contactos</a>
                        </nav>
                      </div>
                    </div>
                  </header>

                  {/* Hero Section */}
                  <section id="inicio" className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-24">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${fundo})` }}
                    ></div>
                    {/* Blue tint overlay matching logo */}
                    <div className="absolute inset-0" style={{ background: 'rgba(74, 144, 194, 0.18)' }}></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Excelência em <span className="text-blue-200">Metalúrgia</span>
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto tracking-widest uppercase font-light">
                        Engineering for you
                      </p>
                      <a
                          href="#portfolio"
                          className="inline-block bg-blue-400 hover:bg-blue-300 text-white font-semibold px-8 py-3 rounded transition-colors text-sm tracking-wide"
                      >
                        Ver Portfólio
                      </a>
                    </div>
                  </section>

                  {/* Visão */}
                  <section id="visao" className="pt-10 pb-4 bg-white" style={{ scrollMarginTop: '64px' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Visão</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          A nossa visão é ser líder na inovação em soluções de metalomecânica de precisão, garantindo excelência, sustentabilidade e parcerias duradouras com os nossos clientes.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Serviços */}
                  <section className="pt-8 pb-10 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Os Nossos Serviços</h2>
                        <p className="text-xl text-gray-600">Soluções completas em metalúrgia para todos os setores</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <service.icon className="w-6 h-6 text-blue-400" />
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                              <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Portfólio */}
                  <section id="portfolio" className="pt-8 pb-20 bg-white" style={{ scrollMarginTop: '64px' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfólio</h2>
                        <p className="text-xl text-gray-600">Clique numa secção para ver as imagens</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolioSections.map((section, idx) => (
                            <Link
                                to={`/portfolio/${idx}`}
                                key={idx}
                                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                            >
                              {/* Fixed aspect ratio image container */}
                              <div className="relative overflow-hidden" style={{ paddingBottom: '62%' }}>
                                <img
                                    src={section.images ? section.images[0] : section.subSections![0].images[0]}
                                    alt={section.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div className="px-5 py-4 flex items-center justify-between">
                                <h3 className="text-base font-semibold text-gray-800 uppercase tracking-wide">{section.title}</h3>
                                <span className="text-blue-300 text-lg">→</span>
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
                            <Phone className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                              <p className="text-gray-300">+351 252 613 714</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <Mail className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-xl font-semibold mb-2">Email</h3>
                              <a href="mailto:geral@ps-metal.pt" className="text-gray-300 hover:text-blue-200 transition-colors">
                                geral@ps-metal.pt
                              </a>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <Linkedin className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                              <a
                                  href="https://www.linkedin.com/company/p-s-metal-lda/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-gray-300 hover:text-blue-200 transition-colors"
                              >
                                P&S Metal, Lda
                              </a>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <MapPin className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-xl font-semibold mb-2">Morada</h3>
                              <p className="text-gray-300">
                                Praceta do Cubo, 185<br />
                                4570-060 Balazar, Póvoa de Varzim
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-8">
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
          <Route
              path="/portfolio/:sectionId"
              element={<PortfolioSectionPage portfolioSections={portfolioSections} />}
          />
        </Routes>
      </Router>
  );
};

export default App;