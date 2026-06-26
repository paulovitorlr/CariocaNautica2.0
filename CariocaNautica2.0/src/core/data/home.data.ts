import { About } from '@core/interfaces/about.interface';
import { Contact } from '@core/interfaces/contact.interface';
import { FeedbacksSection } from '@core/interfaces/feedback.interface';
import { Footer } from '@core/interfaces/footer.interface';
import { Hero } from '@core/interfaces/hero.interface';
import { ProblemsSolutionsSection } from '@core/interfaces/problem-solution.interface';
import { ProcessSection } from '@core/interfaces/process-step.interface';

export const HERO_DATA: Hero = {
  headline: 'Estofados náuticos sob medida para embarcações de luxo',
  subtitle:
    'Acabamento premium, materiais resistentes ao sol e à maresia — feitos para durar no mar com conforto e elegância.',
  imageAlt: 'Interior de embarcação com estofamento náutico premium',
  cta: {
    label: 'Venha fazer seu orçamento com a gente',
    action: 'scroll',
    target: '#contact',
  },
};

export const PROBLEMS_SOLUTIONS_DATA: ProblemsSolutionsSection = {
  title: 'Problemas comuns — e como a Carioca Náutica resolve',
  subtitle: 'Identificamos o que desgasta seu estofamento e entregamos soluções pensadas para o ambiente náutico.',
  items: [
    {
      id: 'desbotado',
      problem: {
        title: 'Desbotado pelo sol',
        description: 'Tecidos expostos perdem cor e ficam opacos com o tempo.',
      },
      solution: {
        title: 'Tecidos UV-resistentes',
        description: 'Materiais selecionados para resistir à radiação solar e manter a cor por mais tempo.',
      },
    },
    {
      id: 'escorregadio',
      problem: {
        title: 'Escorregadio quando molhado',
        description: 'Superfícies úmidas comprometem segurança e conforto a bordo.',
      },
      solution: {
        title: 'Acabamento antiderrapante',
        description: 'Espumas e revestimentos com grip adequado para uso em áreas molhadas.',
      },
    },
    {
      id: 'descolando',
      problem: {
        title: 'Descolando e desgastando',
        description: 'Colagem fraca e costuras mal feitas encurtam a vida útil do estofamento.',
      },
      solution: {
        title: 'Fabricação sob medida',
        description: 'Corte preciso, colagem industrial e costura reforçada para máxima durabilidade.',
      },
    },
  ],
};

export const PROCESS_DATA: ProcessSection = {
  title: 'Como funciona',
  subtitle: 'Do primeiro contato à entrega, cada etapa é pensada para o seu projeto.',
  steps: [
    {
      order: 1,
      title: 'Contato',
      description: 'Você nos conta sobre sua embarcação e o que precisa renovar ou fabricar.',
    },
    {
      order: 2,
      title: 'Apresentação',
      description: 'Apresentamos opções de materiais, cores e acabamentos adequados ao seu uso.',
    },
    {
      order: 3,
      title: 'Medidas',
      description: 'Levantamos medidas precisas no local ou com base nos moldes da embarcação.',
    },
    {
      order: 4,
      title: 'Fabricação sob medida',
      description: 'Produzimos cada peça com acabamento premium e controle de qualidade.',
    },
    {
      order: 5,
      title: 'Entrega',
      description: 'Instalamos ou entregamos pronto para uso, com garantia de satisfação.',
    },
  ],
};

export const FEEDBACKS_DATA: FeedbacksSection = {
  title: 'O que nossos clientes dizem',
  subtitle: 'Depoimentos de quem confiou na Carioca Náutica para renovar sua embarcação.',
  items: [
    {
      id: 'feedback-1',
      quote:
        'O estofamento ficou impecável. Resistente ao sol e muito mais confortável do que o original.',
      author: 'Ricardo M.',
      role: 'Proprietário de lancha 42 pés',
    },
    {
      id: 'feedback-2',
      quote:
        'Atendimento excelente do orçamento à instalação. Recomendo para quem busca qualidade náutica.',
      author: 'Ana Paula S.',
      role: 'Proprietária de veleiro',
    },
    {
      id: 'feedback-3',
      quote:
        'Renovamos todos os assentos e o resultado superou as expectativas. Acabamento de primeira.',
      author: 'Carlos E.',
      role: 'Capitão de iate',
    },
  ],
};

export const ABOUT_DATA: About = {
  title: 'Sobre a Carioca Náutica',
  subtitle: 'Tradição e expertise em estofamento náutico no Rio de Janeiro.',
  paragraphs: [
    'A Carioca Náutica nasceu da paixão pelo mar e pelo cuidado com cada detalhe a bordo. Há anos atendemos proprietários de embarcações de luxo que exigem conforto, durabilidade e acabamento impecável.',
    'Combinamos materiais de alta performance com fabricação sob medida, garantindo que cada projeto reflita o estilo do cliente e as exigências do ambiente marítimo.',
  ],
  imageAlt: 'Equipe Carioca Náutica em trabalho de estofamento náutico',
};

export const CONTACT_DATA: Contact = {
  title: 'Pronto para renovar sua embarcação?',
  subtitle: 'Fale conosco e receba um orçamento personalizado sem compromisso.',
  ctaLabel: 'Solicitar orçamento via WhatsApp',
  whatsappUrl: 'https://wa.me/5521999999999',
  whatsappPhone: '(21) 99999-9999',
};

export const FOOTER_DATA: Footer = {
  brandName: 'Carioca Náutica',
  tagline: 'Estofamento náutico sob medida',
  phone: '(21) 99999-9999',
  email: 'contato@cariocanautica.com.br',
  socialLinks: [
    { label: 'Instagram', url: 'https://instagram.com' },
    { label: 'Facebook', url: 'https://facebook.com' },
  ],
  navLinks: [
    { label: 'Problemas & Soluções', url: '#problemas-solucoes' },
    { label: 'Processo', url: '#processo' },
    { label: 'Depoimentos', url: '#feedbacks' },
    { label: 'Sobre', url: '#sobre' },
    { label: 'Contato', url: '#contact' },
  ],
  copyright: '© 2026 Carioca Náutica. Todos os direitos reservados.',
};

export const HOME_DATA = {
  hero: HERO_DATA,
  problemsSolutions: PROBLEMS_SOLUTIONS_DATA,
  process: PROCESS_DATA,
  feedbacks: FEEDBACKS_DATA,
  about: ABOUT_DATA,
  contact: CONTACT_DATA,
  footer: FOOTER_DATA,
};
