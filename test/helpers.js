const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Ntsika Mark Mngoma',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Ntsika Mark Mngoma',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Ntsika Mark Mngoma',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Ntsika Mark Mngoma',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Ntsika Mark Mngoma',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
