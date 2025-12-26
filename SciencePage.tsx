
import React from 'react';
import { 
  Brain, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Info,
  Beaker,
  History,
  Scale,
  BookOpen,
  ArrowRight,
  Smartphone
} from 'lucide-react';
import { Button } from './components/Button';

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4 uppercase tracking-wider">
    {children}
  </span>
);

const SectionHeading: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

const ScienceCard: React.FC<{ kicker: string; title: string; description: string; extra?: string }> = ({ kicker, title, description, extra }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full">
    <span className="text-xs font-black text-blue-900 uppercase tracking-widest mb-4">{kicker}</span>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed flex-grow">{description}</p>
    {extra && (
      <>
        <div className="h-px bg-slate-100 my-4"></div>
        <p className="text-xs text-slate-900 font-bold leading-relaxed">{extra}</p>
      </>
    )}
  </div>
);

const RefItem: React.FC<{ num: number; title: string; text: string; link: string }> = ({ num, title, text, link }) => (
  <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-900 font-black text-sm shadow-sm">
      {num}
    </div>
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-900 font-bold hover:underline flex items-center gap-1">
        {title} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{text}</p>
    </div>
  </div>
);

const SciencePage: React.FC<{ onNavigate: (view: 'home' | 'science') => void }> = ({ onNavigate }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePurchase = () => {
    window.location.href = 'https://pay.hotmart.com/B103531427J?bid=1766784240831';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <header className="relative pt-12 pb-20 md:pt-20 overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <Badge>Página Científica • Base & Método</Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                Ciência aplicada ao rastreio funcional — com rigor e prudência.
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                O NeuroRastreio utiliza <b>paradigmas cognitivos clássicos</b> amplamente consolidados na literatura científica internacional para gerar <b>dados objetivos</b> de desempenho (ex.: tempo de reação em milissegundos e padrões de resposta), <b>sem se posicionar como diagnóstico</b> e sem substituir avaliações clínicas formais.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button onClick={() => scrollTo('referencias')} className="px-6">Ver referências</Button>
                <Button onClick={() => scrollTo('etica')} variant="outline" className="px-6">Ler escopo & ética</Button>
                <div className="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-mono text-slate-500 shadow-sm">
                   Rastreio funcional digital • 6–14 anos
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white/80 border border-slate-200 rounded-2xl shadow-sm">
                <div className="flex-shrink-0 mt-1">
                  <Info className="w-5 h-5 text-blue-900" />
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-bold text-slate-900">Importante:</span> esta página explica a base científica e o posicionamento ético. <u>Não</u> descreve parâmetros internos, critérios operacionais completos ou lógica replicável do sistema.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <aside className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative">
                <div className="absolute top-0 right-0 -mr-4 -mt-4">
                  <div className="bg-blue-900 p-3 rounded-2xl shadow-lg">
                    <Beaker className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">O que esta página valida</h3>
                <p className="text-slate-600 text-sm mb-6">Quatro pilares que sustentam o NeuroRastreio sem “marketing exagerado”.</p>
                
                <div className="space-y-4">
                  {[
                    { title: "Paradigmas clássicos", desc: "Stroop, Flanker, Go/No-Go, Corsi, N-Back, Reaction Time." },
                    { title: "Precisão digital", desc: "Coleta de métricas temporais (ms) e padrões de resposta com consistência." },
                    { title: "Uso clínico real", desc: "Baseline e acompanhamento evolutivo ao longo do tempo." },
                    { title: "Escopo ético claro", desc: "Rastreio funcional digital ≠ equivalência psicométrica ≠ diagnóstico." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-50 bg-slate-50/50">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-teal-500" />
                      </div>
                      <div>
                        <b className="text-sm text-slate-900 block">{item.title}</b>
                        <span className="text-xs text-slate-500 leading-tight block mt-1">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </header>

      {/* Fundamentos */}
      <Section id="fundamentos">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Fundamentos científicos</h2>
              <p className="text-slate-600 leading-relaxed">
                O NeuroRastreio se baseia em tradições experimentais clássicas da psicologia cognitiva e neurociência cognitiva, em linha com práticas acadêmicas de centros de referência (incluindo Universidade de Oxford), traduzidas para um <b>rastreio funcional digital</b> aplicável ao contexto clínico.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-xs font-mono text-slate-500">
                Ciência → Clínica (sem “pular” etapas)
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ScienceCard 
              kicker="Base" 
              title="Paradigmas experimentais consolidados" 
              description="Tarefas clássicas são utilizadas como paradigmas para observar padrões de desempenho (ex.: inibição, atenção, atualização de informação e velocidade de processamento) em condições controladas."
            />
            <ScienceCard 
              kicker="Métrica" 
              title="Precisão temporal e consistência" 
              description="O ambiente digital permite medir tempo de reação e padrões de resposta com precisão em milissegundos, reduzindo ruído de cronometração manual e tornando comparações longitudinais mais confiáveis."
            />
            <ScienceCard 
              kicker="Finalidade" 
              title="Rastreio funcional e acompanhamento" 
              description="O objetivo é produzir baseline e monitorar evolução ao longo do tempo para apoiar decisões clínicas, sem substituir avaliação clínica completa ou instrumentos diagnósticos formais."
            />
          </div>

          <div className="mt-8 flex gap-4 p-6 bg-blue-50/50 border border-blue-100 rounded-2xl items-center">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <History className="w-5 h-5 text-blue-900" />
            </div>
            <div>
              <b className="text-slate-900 block mb-1">Tradução correta para o contexto clínico</b>
              <p className="text-sm text-slate-600">Paradigmas cognitivos clássicos são usados aqui como <b>rastreio funcional digital</b> — não como “teste psicológico” e não como equivalência psicométrica a baterias formais.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Paradigmas */}
      <Section id="paradigmas" className="bg-slate-50/50 border-y border-slate-100">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Paradigmas utilizados</h2>
              <p className="text-slate-600 leading-relaxed">
                Abaixo, os paradigmas clássicos empregados como base do rastreio funcional. Cada um observa um conjunto de processos cognitivos com relevância prática para o acompanhamento.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-mono text-slate-500 shadow-sm">
                6 paradigmas • uso operacional
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScienceCard kicker="Inibição • Interferência" title="Stroop (Infantil)" description="Observa resistência à interferência e controle inibitório em condições de conflito estímulo-resposta." />
            <ScienceCard kicker="Atenção seletiva • Conflito" title="Flanker Task" description="Estima atenção seletiva e processamento eficiente diante de estímulos congruentes e incongruentes." />
            <ScienceCard kicker="Controle inibitório motor" title="Go / No-Go" description="Observa freio de resposta e impulsividade funcional via respostas e omissões em condições controladas." />
            <ScienceCard kicker="Memória visuoespacial" title="Corsi Blocks" description="Explora retenção/manipulação de sequência visuoespacial em tarefas padronizadas de curto prazo." />
            <ScienceCard kicker="Memória operacional" title="N-Back" description="Observa atualização de informação e monitoramento contíduo em tarefas de repetição e comparação." />
            <ScienceCard kicker="Velocidade • Vigilância" title="Reaction Time" description="Mede rapidez de detecção e reação a estímulos, com foco em precisão temporal e consistência." />
          </div>

          <div className="mt-12 p-6 bg-white border border-slate-200 rounded-2xl text-slate-600 text-sm leading-relaxed">
            <span className="font-bold text-slate-900 block mb-2">Nota de proteção (anti-ruído e anti-má interpretação):</span>
            referências a paradigmas e baterias formais são apresentadas como <u>orientação conceitual</u> e <u>contexto clínico</u>. Não implicam equivalência psicométrica, substituição de testes, nem promessa diagnóstica.
          </div>
        </Container>
      </Section>

      {/* Ética */}
      <Section id="etica">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Escopo, ética e limites</h2>
              <p className="text-slate-600 leading-relaxed">
                A página “Ciência” precisa ser clara sobre o que o NeuroRastreio <b>é</b> e o que ele <b>não é</b>. Aqui está o posicionamento institucional, direto e defensável.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-xs font-mono text-slate-500">
                Blindagem clínica & institucional
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ScienceCard 
              kicker="O que é" 
              title="Rastreio funcional digital" 
              description="Um instrumento de apoio à decisão profissional, orientado a dados objetivos (ex.: tempos em ms e padrões de resposta), para baseline, triagem funcional e acompanhamento evolutivo."
              extra="Uso típico: primeira consulta, início da intervenção, reavaliações, atendimento remoto assistido."
            />
            <ScienceCard 
              kicker="O que não é" 
              title="Não é diagnóstico" 
              description="Não substitui avaliação clínica completa, não é bateria psicométrica, não determina hipótese diagnóstica por si só e não deve ser usado como “laudo” ou conclusão final."
              extra="Regra de ouro: dados do rastreio orientam investigação e conduta — não “carimbam” diagnóstico."
            />
          </div>

          <div className="mt-8 flex gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <b className="text-slate-900 block mb-1 text-sm">Aplicação remota assistida (quando aplicável)</b>
              <p className="text-xs text-slate-600 leading-relaxed">A aplicação pode ocorrer fora do consultório como extensão controlada do acompanhamento. O WhatsApp é o meio de envio — a execução ocorre em ambiente seguro e controlado.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Referências */}
      <Section id="referencias" className="bg-slate-50/30">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Referências e fontes institucionais</h2>
              <p className="text-slate-600 leading-relaxed">
                Fontes públicas e institucionais que representam o “tronco” científico: psicologia cognitiva, paradigmas clássicos e cultura de pesquisa. (Links externos para consulta — não descrevem implementação do NeuroRastreio.)
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-mono text-slate-500 shadow-sm">
                Links públicos • consulta externa
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
            <RefItem num={1} title="University of Oxford — Research" text="Visão institucional de pesquisa e produção científica (contexto macro de rigor acadêmico)." link="https://www.ox.ac.uk/research" />
            <RefItem num={2} title="University of Oxford — Department of Experimental Psychology" text="Referência institucional em psicologia experimental e tradições de pesquisa em cognição e atenção." link="https://www.psy.ox.ac.uk/" />
            <RefItem num={3} title="Oxford — Pesquisa em tomada de decisão" text="Exemplo público de divulgação científica alinhada à cultura de evidência e investigação cognitiva." link="https://www.ox.ac.uk/research/research-in-conversation/how-does-our-brain-make-decisions" />
            <RefItem num={4} title="Stanford Encyclopedia of Philosophy — Attention (visão conceitual)" text="Fonte conceitual ampla (para entendimento de termos e estrutura do campo)." link="https://plato.stanford.edu/entries/attention/" />
            <RefItem num={5} title="Nature — Cognitive Neuroscience (tópicos)" text="Panorama público de temas centrais em neurociência cognitiva (attention, controle, memória, processamento)." link="https://www.nature.com/subjects/cognitive-neuroscience" />
            
            <div className="mt-8 p-6 bg-slate-50 rounded-2xl text-xs text-slate-400 italic">
               <span className="font-bold text-slate-600 not-italic block mb-1">Nota importante sobre citações:</span>
               as referências acima são <u>fontes públicas</u> para contextualização do campo (paradigmas cognitivos e cultura científica). O NeuroRastreio mantém parâmetros internos e critérios operacionais completos como parte de sua propriedade intelectual e governança técnica.
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section id="cta-ciencia">
        <Container>
          <div className="bg-blue-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ciência sólida só importa quando vira decisão clínica.</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
              Veja como o NeuroRastreio aplica esses fundamentos científicos na prática clínica real, com dados objetivos, precisão operacional e posicionamento ético claro.
            </p>
            <div className="flex flex-col items-center gap-4 justify-center relative z-10">
              <Button onClick={handlePurchase} variant="secondary" className="bg-teal-500 text-white hover:bg-teal-600 border-none text-lg px-8">
                Use por 7 dias. Reembolso fácil.
              </Button>
              <button 
                onClick={() => onNavigate('home')} 
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                ← Voltar para a página inicial
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-slate-100 text-sm">
        <Container>
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-blue-900" />
                <span className="font-bold text-slate-900 tracking-tight">NEURORASTREIO</span>
              </div>
              <p className="text-slate-500 mb-6">
                Ciência cognitiva. Precisão operacional. Prática clínica.
              </p>
              <p className="text-slate-400 text-xs mt-auto">
                © {new Date().getFullYear()} NeuroRastreio — Todos os direitos reservados.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Produto</h4>
              <ul className="space-y-2 text-slate-500 text-xs">
                <li>Status: Pronto para execução</li>
                <li>Público: Crianças de 6 a 14 anos</li>
                <li>Suporte remoto: Aplicação assistida</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Segurança e Ética</h4>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                Ferramenta de rastreio cognitivo funcional para apoio à decisão profissional. Não substitui avaliação clínica completa. Não realiza diagnóstico automático.
              </p>
              <div className="flex gap-4 text-blue-900 font-bold text-xs uppercase tracking-widest">
                <button onClick={() => scrollTo('etica')} className="hover:underline">Escopo e limites</button>
                <button onClick={() => scrollTo('referencias')} className="hover:underline">Referências</button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 text-xs text-slate-400 leading-relaxed text-center md:text-left">
            <span className="font-bold text-slate-600 block mb-1 not-italic">Declaração institucional:</span> 
            o NeuroRastreio é um instrumento de <u>rastreio funcional digital</u>. Deve ser usado por profissional qualificado como apoio à investigação e ao acompanhamento. Não substitui testes formais, nem avaliações clínicas completas. Resultados devem ser interpretados no contexto do caso, histórico e observação clínica.
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default SciencePage;
