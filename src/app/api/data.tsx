import { getImgPath } from '@/utils/imagePath';

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "4.86",
        description: "Out of 5 stars from 3896 reviews on google platform",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "364",
        description: "Client testimonials received in the year 2021",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "45M+",
        description: "Revenue generated through new projects & marketing",
    },
];

export const cardData = [
    {
      iconUrl: getImgPath('/images/build-amazing/beautiful-design.svg'),
      title: 'Beautiful designs premade',
      description: 'Lorem ipsum dolor sit amet, consect etur adipiscing',
      link: '/',
    },
    {
      iconUrl: getImgPath('/images/build-amazing/coded.svg'),
      title: 'Coded with much care & notes',
      description: 'Lorem ipsum dolor sit amet, consect etur adipiscing',
      link: '/',
    },
    {
      iconUrl: getImgPath('/images/build-amazing/amazing.svg'),
      title: 'Amazing demos included',
      description: 'Lorem ipsum dolor sit amet, consect etur adipiscing',
      link: '/',
    },
    {
      iconUrl: getImgPath('/images/build-amazing/beautiful-design.svg'),
      title: 'Beautiful designs premade',
      description: 'Lorem ipsum dolor sit amet, consect etur adipiscing',
      link: '/',
    },
  ];

  export const boxData = [
    {
      src: getImgPath('/images/photo/1.jpg'),
      alt: { tr: '2025 Yıl Sonu Sergisi', en: '2025 Year End Exhibition' },
      title: { tr: '2025 Yıl Sonu Sergi', en: '2025 Year End Exhibition' },
      description: { 
        tr: 'Okulumuzun yıl sonu sergisinde Web Temelleri alanında 1.\'lik elde ettim; projeyi sunarak ziyaretçilere deneyimi aktardım.', 
        en: 'I won 1st place in the Web Fundamentals area at our school\'s year-end exhibition; I presented the project and shared the experience with visitors.' 
      },
      slug: "portfolio-1"
    },
    {
      src: getImgPath('/images/photo/2.jpg'),
      alt: { tr: 'Eduft Portal Çalıştayı', en: 'Edufy Portal Workshop' },
      title: { tr: 'Eduft Portal Çalıştayı', en: 'Edufy Portal Workshop' },
      description: { 
        tr: 'Edufy Portal Çalıştayında xrlab ekibinde görev alarak çalıştay için gelen hocalara bilgilendirmeler ve portal kullanımında yardımcı oldum.', 
        en: 'At the Edufy Portal Workshop, I worked as part of the xrlab team, providing information and assisting professors with portal usage.' 
      },
      slug: "portfolio-2"
    },
    {
      src: getImgPath('/images/photo/3.jpg'),
      alt: { tr: 'Yıl Sonu Sergisi Hatırası', en: 'Year End Exhibition Souvenir' },
      title: { tr: 'Yıl Sonu Sergisi Hatırası', en: 'Year End Exhibition Souvenir' },
      description: { 
        tr: 'Yıl sonu sergisinde hocalarım, rektör yardımcısı ve sınıf arkadaşlarımla birlikte çekilmiş hatıra fotoğrafı.', 
        en: 'A souvenir photo taken with my professors, vice-rector, and classmates at the year-end exhibition.' 
      },
      slug: "portfolio-3"
    },
    {
      src: getImgPath('/images/photo/4.jpg'),
      alt: { tr: 'Çalışma 4', en: 'Work 4' },
      title: { tr: 'Proje Çalışmaları', en: 'Project Work' },
      description: { 
        tr: 'Yaratıcı projeler ve işbirlikleri ile deneyim kazanma süreçleri.', 
        en: 'Experience gaining processes through creative projects and collaborations.' 
      },
      slug: "portfolio-4"
    },
    {
      src: getImgPath('/images/work-grow/financial-image.jpg'),
      alt: { tr: 'work-grow', en: 'work-grow' },
      title: { tr: 'Financial data concept illustration', en: 'Financial data concept illustration' },
      description: {
        tr: '',
        en: '',
      },
      slug: "portfolio-5"
    },
  ];

 export const accordionData = [
    {
      title: "How do I figure out what to learn?",
      content:
        "The most important thing is that you want to learn something that interests you, because once you start learning, you’ll be with this topic for a while. Choosing something just because it’s popular or what others are doing isn’t the way to go because if you don’t have a true interest in it, you’ll lose the motivation to learn! Spend some time seriously looking into the different tech career paths before choosing one to go down.",
    },
    {
      title: "Which programming language is the best to learn?",
      content:
        "I usually tell most people to start by learning HTML and CSS, then move into learning JavaScript. The reason is that JavaScript is used everywhere: frontend, backend, and even to build mobile apps. It has many use cases, which is why I think it’s smart to learn.",
    },
    {
      title: "Is it possible to do both graphic design and coding?",
      content:
        "If you have an interest in coding and graphic design, then there’s nothing to say you shouldn’t learn skills in both areas. They often work hand-in-hand, so having knowledge and skills in both areas could be desirable for certain career paths. You could also think about pursuing something in between like UI design, which is a very in-demand career right now!",
    },
    {
      title: "Should I learn Python 2 or Python 3?",
      content:
        "Now, in 2020, it’s a no-brainer: Python 3 is definitely the way to go. There are still some situations where picking up Python 2 might be advantageous, or you may just want to learn a little of the history and the differences between Python 2 and 3 for curiosity’s sake, but job-wise, Python 3 is the clear winner.",
    },
    {
      title: "Should I learn skills in several areas?",
      content:
        "Personally, I’d say choose a path and stick to it! Learning too many things at once will slow you down. Here are a few ideas of things you can choose to focus on, and a little bit about each one.",
    },
  ];

  export const sections = {
    features: [
      { name: 'Online Payments', href: '/' },
      { name: 'Financial Projections', href: '/' },
      { name: 'Bookkeeping', href: '/' },
      { name: 'Banking', href: '/' },
    ],
    resources: [
      { name: 'Documentation', href: '/' },
      { name: 'Integrations', href: '/' },
      { name: 'API Reference', href: '/' },
      { name: 'Support', href: '/' },
      { name: 'Help', href: '/' },
    ],
    platform: [
      { name: 'Infrastructure', href: '/' },
      { name: 'Certifications', href: '/' },
      { name: 'Licenses', href: '/' },
      { name: 'Terms and conditions', href: '/' },
      { name: 'Legal', href: '/' },
    ],
  };