import React from 'react';
import { Phone, Mail, MapPin, Award, Users, Wrench, Factory, Shield, Clock, CheckCircle } from 'lucide-react';

function App() {
  const portfolioItems = [
    {
      id: 1,
      title: "Estruturas Industriais",
      description: "Fabricação de estruturas metálicas para indústrias e armazéns",
      image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Industrial"
    },
    {
      id: 2,
      title: "Portões e Grades",
      description: "Portões automáticos e grades de segurança personalizadas",
      image: "https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Segurança"
    },
    {
      id: 3,
      title: "Escadas Metálicas",
      description: "Escadas industriais e residenciais em aço inoxidável",
      image: "https://images.pexels.com/photos/1029641/pexels-photo-1029641.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Arquitetónico"
    },
    {
      id: 4,
      title: "Corrimãos e Guardas",
      description: "Sistemas de proteção e corrimãos para edifícios",
      image: "https://images.pexels.com/photos/1029622/pexels-photo-1029622.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Arquitetónico"
    },
    {
      id: 5,
      title: "Tanques e Reservatórios",
      description: "Fabricação de tanques industriais e reservatórios",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Industrial"
    },
    {
      id: 6,
      title: "Peças Personalizadas",
      description: "Componentes metálicos sob medida para diversos setores",
      image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Personalizado"
    }
  ];

  const services = [
    {
      icon: Factory,
      title: "Fabricação Industrial",
      description: "Estruturas metálicas robustas para indústrias e construção civil"
    },
    {
      icon: Wrench,
      title: "Soldadura Especializada",
      description: "Técnicas avançadas de soldadura TIG, MIG e eletrodo revestido"
    },
    {
      icon: Shield,
      title: "Tratamento Anticorrosivo",
      description: "Galvanização e pintura industrial para máxima durabilidade"
    },
    {
      icon: Award,
      title: "Certificação de Qualidade",
      description: "Todos os trabalhos seguem normas ISO e certificações europeias"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Factory className="w-8 h-8 text-orange-500 mr-3" />
              <h1 className="text-xl font-bold">MetalTech Solutions</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="hover:text-orange-400 transition-colors">Início</a>
              <a href="#missao" className="hover:text-orange-400 transition-colors">Visão</a>
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
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Excelência em <span className="text-orange-500">Metalúrgia</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Engineering for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#portfolio" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Ver Portfólio
            </a>
            <a 
              href="#contactos" 
              className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Contactar-nos
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="missao" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visão</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A nossa visão é ser líder na inovação em soluções de metalomecânica de precisão, garantindo excelência, sustentabilidade e parcerias duradouras com os nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Trabalho de metalúrgia"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualidade Garantida</h3>
                  <p className="text-gray-600">Utilizamos apenas materiais de primeira qualidade e seguimos rigorosamente as normas europeias de segurança e qualidade.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inovação Constante</h3>
                  <p className="text-gray-600">Investimos continuamente em tecnologia e formação para oferecer as soluções mais avançadas do mercado.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Compromisso Ambiental</h3>
                  <p className="text-gray-600">Praticamos metalúrgia sustentável, reciclando materiais e minimizando o impacto ambiental dos nossos processos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Os Nossos Serviços</h2>
            <p className="text-xl text-gray-600">Soluções completas em metalúrgia para todos os setores</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfólio</h2>
            <p className="text-xl text-gray-600">Alguns dos nossos trabalhos mais representativos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactos" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contactos</h2>
            <p className="text-xl text-gray-300">Entre em contacto connosco para discutir o seu projeto</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
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
                <Clock className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Horário</h3>
                  <p className="text-gray-300">Segunda a Sexta: 08:00 - 18:00</p>
                  <p className="text-gray-300">Sábado: 08:00 - 13:00</p>
                  <p className="text-gray-300">Domingo: Encerrado</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Solicite um Orçamento</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white"
                      placeholder="O seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white"
                      placeholder="o.seu.email@exemplo.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white"
                    placeholder="+351 912 345 678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Projeto</label>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white">
                    <option>Estruturas Industriais</option>
                    <option>Portões e Grades</option>
                    <option>Escadas Metálicas</option>
                    <option>Corrimãos e Guardas</option>
                    <option>Tanques e Reservatórios</option>
                    <option>Peças Personalizadas</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white"
                    placeholder="Descreva o seu projeto..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Enviar Pedido de Orçamento
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Factory className="w-8 h-8 text-orange-500 mr-3" />
                <h3 className="text-xl font-bold">MetalTech Solutions</h3>
              </div>
              <p className="text-gray-400">
                Engineering for you
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Estruturas Industriais</li>
                <li>Soldadura Especializada</li>
                <li>Tratamento Anticorrosivo</li>
                <li>Certificação de Qualidade</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto Rápido</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +351 234 567 890
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  geral@metaltech.pt
                </p>
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Aveiro, Portugal
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MetalTech Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;