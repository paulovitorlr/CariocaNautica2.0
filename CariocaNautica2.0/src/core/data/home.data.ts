import { About } from '@core/interfaces/about.interface';
import { Contact } from '@core/interfaces/contact.interface';
import { FeedbacksSection } from '@core/interfaces/feedback.interface';
import { Footer } from '@core/interfaces/footer.interface';
import { Hero } from '@core/interfaces/hero.interface';
import { ProblemsSolutionsSection } from '@core/interfaces/problem-solution.interface';
import { ProcessSection } from '@core/interfaces/process-step.interface';
import { SegmentsSection } from '@core/interfaces/segments.interface';
import { Navbar } from '@core/interfaces/navbar.interface';

export const HERO_DATA: Hero = {
  headline: 'Design, qualidade e resistência para quem vive o mar.',
  subtitle:
    'Mais conforto para quem navega, mais valorização para sua embarcação e mais tranquilidade para aproveitar cada momento.',
    image: 'assets/images/DSC01287.JPG.jpeg',
  imageAlt: 'imagem do mar',
  cta: {
    label: 'Venha fazer seu orçamento com a gente',
    action: 'scroll',
    target: '#contact',
  },
};

export const NAVBAR_DATA: Navbar = {
  logo: 'assets/images/logo.png',
  logoAlt: 'Carioca Náutica',

  items: [
    {
      label: 'Aplicações',
      target: '#segments',
    },
    {
      label: 'Avaliações',
      target: '#feedbacks',
    },
    {
      label: 'Sobre',
      target: '#sobre',
    },
    {
      label: 'Contato',
      
      target: '#contact',
    },
  ],

  cta: {
    label: 'Faça seu orçamento',
    action: 'scroll',
    target: '#contact',
  },
};

export const PROBLEMS_SOLUTIONS_DATA: ProblemsSolutionsSection = {
  title: 'Best Sellers',
  subtitle: 'Os produtos mais procurados da Carioca Náutica.',
  items: [
    {
      id: '1',
      image: 'assets/images/BestSeller1.jpeg',
      rating: 5,
      description: 'Piso Náutico EVA Premium com proteção UV.',
      button: 'Tenho Interesse'
    },
    {
      id: '2',
      image: 'assets/images/BestSeller2.jpeg',
      rating: 5,
      description: 'Acabamento antiderrapante e impermeável.',
      button: 'Tenho Interesse'
    },
    {
      id: '3',
      image: 'assets/images/BestSeller3.jpeg',
      rating: 4,
      description: 'Material resistente à água salgada.',
      button: 'Tenho Interesse'
    },
    {
      id: '4',
      image: 'assets/images/BestSeller4.jpeg',
      rating: 5,
      description: 'Fácil instalação e fácil manutenção.',
      button: 'Tenho Interesse'
    }
  ]
};

export const SEGMENTS_DATA: SegmentsSection = {

  title: 'Aplicações',

  subtitle:
    'Soluções personalizadas para diferentes tipos de embarcações.',

  items: [

    {
      title: 'Lanchas',
      description:
        'Pisos EVA personalizados para lanchas de todos os portes.',
      image: 'assets/images/Aplicacoes1.jpeg',
      icon: '🚤',
      link: '#contato',
      featured: true,
      button: 'Saiba mais'
    },

    {
      title: 'Jet Skis',
      description:
        'Alta aderência e acabamento premium.',
      image: 'assets/images/Aplicacoes2.jpeg',
      icon: '🌊',
      link: '#contato',
      featured: true,
      button: 'Saiba mais'
    },

    {
      title: 'Catamarãs',
      description:
        'Projetos sob medida para embarcações de grande porte.',
      image: 'assets/images/Aplicacoes3.jpeg',
      icon: '⛵',
      link: '#contato',
      button: 'Saiba mais'
    },

    {
      title: 'Pesqueiros',
      description:
        'Resistência, conforto e segurança para pesca esportiva.',
      image: 'assets/images/Aplicacoes4.jpeg',
      icon: '🎣',
      link: '#contato',
      button: 'Saiba mais'
    }

  ]

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
  image: 'assets/images/Aplicacoes2.jpeg',
  imageAlt: 'Equipe Carioca Náutica em trabalho de estofamento náutico'
};

export const CONTACT_DATA: Contact = {
  title: 'Solicite seu orçamento sem compromisso',
  subtitle:
    'Preencha o formulário abaixo e nossa equipe entrará em contato para entender sua necessidade e elaborar um orçamento personalizado.',

  form: {
    namePlaceholder: 'Seu nome',
    emailPlaceholder: 'Seu e-mail',
    phonePlaceholder: '(00) 00000-0000',
    messagePlaceholder:
      'Conte um pouco sobre sua embarcação e o serviço que deseja.',

    submitLabel: 'Solicitar orçamento',
  },
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
