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

  image: 'assets/images/hero5.jpeg',
  imageAlt: 'Imagem do mar',

  cta: {
    label: 'Venha fazer seu orçamento com a gente',
    action: 'scroll',
    target: '#contact',
  },

  secondaryCta: {
    label: 'Fale conosco pelo WhatsApp',
    action: 'link',
    target: 'https://wa.me/5521969252525',
  }
};

export const NAVBAR_DATA: Navbar = {
  logo: 'assets/images/PIRATA_CARECA.png',
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
      image: 'assets/images/BestSeller1.JPG',
      rating: 5,
      description: 'Durabilidade, qualidade e exclusividade: o Thermo Deck Beach, disponível apenas conosco',
      button: 'Tenho Interesse'
    },
    {
      id: '2',
      image: 'assets/images/BestSeller2.jpeg',
      rating: 5,
      description: 'O Kap Boat chegou com impressão em 4K, infinitas opções de layout e ótimo custo-benefício',
      button: 'Tenho Interesse'
    },
    {
      id: '3',
      image: 'assets/images/BestSeller3.jpeg',
      rating: 4,
      description: 'O EVA Soft Tech Premium tem lixamento especial que deixa a textura aveludada, com infinitas opções de personalização, o piso náutico da Kapazi Náutica.',
      button: 'Tenho Interesse'
    },
    {
      id: '4',
      image: 'assets/images/BestSeller4.JPG',
      rating: 5,
      description: 'Teka sintética com fácil manutenção e acabamento premium: o Thermo Deck Beach, da Kapazi Náutica.',
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
        'Pisos personalizados para lanchas de todos os portes.',
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
      title: 'Veleiros',
      description:
        'Projetos sob medida para embarcações de grande porte.',
      image: 'assets/images/Aplicacoes3.jpeg',
      icon: '⛵',
      link: '#contato',
      button: 'Saiba mais'
    },

    {
      title: 'Catamarãs',
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
      description: 'Nossa equipe realiza a instalação, conforme as certificações da Kapazi Náutica, garantindo a satisfação do cliente',
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
        'Já fiz 3 lanchas com a Carioca Náutica e não troco por nada. Eles cuidam de tudo, do molde até a instalação, sem eu precisar me preocupar com nada. O pós venda também é excelente, qualquer dúvida ou ajuste eles resolvem rápido. E as condições de pagamento facilitaram muito, consegui parcelar do jeito que fazia sentido pra mim. Recomendo de olhos fechados.',
      author: 'RQ Passeios',
      role: 'Proprietário de 3 lanchas',
    },
    {
      id: 'feedback-2',
      quote:
        'Importei um catamarã e um veleiro, mas na hora de pensar no piso não pensei duas vezes em fechar com a Carioca Náutica. O processo é incrível do início ao fim, e o Thermo Deck Beach mudou completamente a cara das duas embarcações. Fora que a durabilidade é impressionante, mesmo com o uso constante no mar. Depois dessa experiência, não recomendo outra empresa pra quem quer qualidade de verdade.',
      author: 'Marcelo S.',
      role: 'Proprietário de veleiro e catamarã',
    },
    {
      id: 'feedback-3',
      quote:
        'O que mais me impressionou na Carioca Náutica foi o nível de conhecimento técnico da equipe. Eles entendem de verdade sobre piso náutico e conseguem indicar a melhor solução pra cada tipo de embarcação e uso. A qualidade do material é outro ponto que faz toda a diferença, dá pra sentir o acabamento premium assim que pisa. Uma empresa que domina o que faz do início ao fim',
      author: 'Felipe S.',
      role: 'Proprietário de lancha 40 pés',
    },
  ],
};

export const ABOUT_DATA: About = {
  title: 'Sobre a Carioca Náutica',
  subtitle: 'Tradição e expertise em estofamento náutico no Rio de Janeiro.',
  paragraphs: [
    'Há 5 anos no mercado, a Carioca Náutica é representante oficial e técnica da Kapazi Náutica no Rio de Janeiro. Nossa equipe é treinada e qualificada diretamente pela Kapazi, o que garante o mesmo padrão de qualidade em cada projeto, do molde ao acabamento final. Estamos prontos pra atender qualquer tipo de embarcação, seja veleiro, jet ski, catamarã, lancha ou iate.',
    'Trabalhamos com diversos materiais, entre linhas externas e internas, sempre sob medida e com personalizações ilimitadas. Do desenho ao friso, o piso é feito do jeito que você imaginar. Convidamos você a conhecer, aqui no site, os materiais que já expusemos e instalamos em embarcações por todo o Brasil.',
    'Nossa presença já foi validada nas maiores vitrines náuticas do país. Nossos pisos estiveram expostos em mais de 10 estaleiros na Rio Boat Show 2026, e a nossa equipe da Carioca Náutica foi a responsável pelo molde e pela instalação de 5 embarcações apresentadas na feira.',
    'Mais do que representantes técnicos, somos apaixonados pelo que fazemos. Por isso, estamos ao seu lado em cada etapa, do primeiro contato ao molde, da venda à instalação, e também no pós-venda.',
    'Fale com a gente e transforme a sua embarcação.',
  ],
  image: 'assets/images/Sobre.jpeg',
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
  tagline: 'Revestimento náutico sob medida',
  phone: '(21) 96925-2525',
  email: 'cariocanauticaj@gmail.com',
  socialLinks: [
    { label: 'Instagram', url: 'https://www.instagram.com/cariocanautica/' },
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
