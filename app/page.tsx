'use client';

import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Cpu, 
  Server, 
  Rocket, 
  Mail, 
  Menu, 
  X, 
  ExternalLink, 
  ArrowRight,
  CheckCircle2,
  Layers,
  Smartphone,
  Bot,
  Globe,
  Share2
} from 'lucide-react';

export default function SyslorTechSite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      
      {/* HEADER / NAVEGAÇÃO FIXA */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black shadow-lg transform group-hover:scale-105 transition-transform duration-300">
              <span className="tracking-tighter text-lg">ST</span>
              <div className="absolute inset-0 rounded-xl border border-slate-400/30 scale-110 pointer-events-none"></div>
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              Syslor<span className="text-slate-500 font-light">Tech</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#inicio" className="hover:text-slate-900 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-slate-900 transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-slate-900 transition-colors">Serviços</a>
            <a href="#projetos" className="hover:text-slate-900 transition-colors">Projetos</a>
            <a href="#contato" className="px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm hover:shadow">
              Contato
            </a>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-900 p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium py-2">Início</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium py-2">Sobre</a>
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium py-2">Serviços</a>
            <a href="#projetos" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 font-medium py-2">Projetos</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-center py-3 rounded-xl bg-slate-900 text-white font-medium">Contato</a>
          </div>
        )}
      </header>

      {/* SEÇÃO 1: INÍCIO */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100 to-slate-50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold mb-6 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Software House & Inovação Digital
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
              Elevando negócios através de <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-50">código de alta performance.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Desenvolvemos ecossistemas web sob medida, automações inteligentes e interfaces imersivas que transformam ideias em referências de mercado.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projetos" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-md hover:translate-y-[-2px]">
                Explorar Projetos <ArrowRight size={18} />
              </a>
              <a href="#contato" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 border border-slate-200 font-medium hover:bg-slate-50 transition-all hover:translate-y-[-2px]">
                Fale Conosco
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-center py-10">
            <div className="relative w-72 h-72 md:w-96 md:h-96 perspective-[1000px]">
              <div className="absolute inset-0 rounded-full border border-slate-200/80 animate-[spin_20s_linear_infinite] flex items-center justify-center">
                <div className="absolute -top-1.5 w-3 h-3 bg-slate-900 rounded-full shadow-md"></div>
                <div className="absolute -bottom-1.5 w-3 h-3 bg-slate-400 rounded-full"></div>
              </div>
              
              <div className="absolute inset-6 rounded-full border border-dashed border-slate-300 animate-[spin_15s_linear_infinite_reverse]"></div>

              <div className="absolute inset-12 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-slate-100 border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-8 transform hover:rotate-y-12 hover:rotate-x-12 transition-transform duration-500 ease-out group">
                <div className="w-20 h-20 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-3xl font-black shadow-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  ST
                </div>
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Syslor Tech</span>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  <CheckCircle2 size={12} /> Sistemas Ativos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: SOBRE */}
      <section id="sobre" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-3">01. Quem Somos</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Arquitetura de software moldada com precisão e inovação.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 mb-6">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Visão Tecnológica</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Fundada com o propósito de redefinir padrões digitais, a Syslor Tech entrega aplicações web completas, escaláveis e focadas na experiência do usuário final.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Stack Moderna</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Utilizamos ecossistemas avançados como React, Next.js, TypeScript, Tailwind CSS e infraestrutura robusta em nuvem para garantir máxima performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Soluções Sob Medida</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Cada projeto é tratado de forma exclusiva, unindo design sofisticado, lógica apurada e automações eficientes para impulsionar o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: SERVIÇOS */}
      <section id="servicos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-3">02. Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              O que construímos para o seu ecossistema.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-900 transition-all duration-300 group">
              <Layers className="text-slate-900 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Web Apps & Sites</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Plataformas institucionais, SaaS e sistemas web de alta conversão desenvolvidos em Next.js.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-900 transition-all duration-300 group">
              <Bot className="text-slate-900 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Automações com IA</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Implementação de fluxos inteligentes com Typebot e integrações automatizadas via API.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-900 transition-all duration-300 group">
              <Smartphone className="text-slate-900 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">UI/UX Design</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Interfaces limpas, responsivas e focadas na experiência do usuário e usabilidade perfeita.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-900 transition-all duration-300 group">
              <Server className="text-slate-900 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Infraestrutura & TI</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Configuração de servidores VPS, Docker, bancos de dados e suporte técnico especializado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: PROJETOS */}
      <section id="projetos" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-3">03. Portfólio</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              Projetos entregues com excelência técnica.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-900">01</div>
                  <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><ExternalLink size={20} /></a>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Plataforma para Barbearia</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Sistema web completo para agendamentos online, gestão de clientes e catálogo de serviços com arquitetura componentizada.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">Next.js</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">Tailwind</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">TypeScript</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-900">02</div>
                  <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><ExternalLink size={20} /></a>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Automação de Atendimento</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Fluxos de conversação inteligentes e personalizados integrados via Typebot para qualificação automática de leads.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">Typebot</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">Docker</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">Node.js</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-900">03</div>
                  <a href="https://github.com/kauasantossilva05" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Globe size={20} /></a>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Sistemas & Web Apps</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Criação de portais corporativos, painéis administrativos e aplicações interativas otimizadas para SEO.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">React</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">PostgreSQL</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: CONTATO */}
      <section id="contato" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-3">04. Contato</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-6">
              Vamos iniciar seu próximo projeto tecnológico?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Estamos prontos para transformar sua visão em realidade. Entre em contato conosco para parcerias, orçamentos ou consultoria em desenvolvimento.
            </p>
            <div className="flex flex-col gap-4 text-slate-700 font-medium">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-slate-900" />
                <span>contato@syslortech.com</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200/80">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-600 text-sm">Obrigado pelo contato. Retornaremos em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Seu Nome</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Digite seu nome"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Seu E-mail</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="seu@email.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Sua Mensagem</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Como podemos ajudar sua empresa?"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-slate-900 transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-md mt-2 flex items-center justify-center gap-2"
                >
                  Enviar Mensagem <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
              ST
            </div>
            <span className="font-bold text-slate-900">Syslor Tech</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Syslor Tech. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/kauasantossilva05" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white transition-all">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white transition-all">
              <Share2 size={18} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}