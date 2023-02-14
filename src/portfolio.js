const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://williamgomes62.github.io/portifolio/',
  title: 'WG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'William Gomes',
  role: 'Desenvolvedor Frontend e mobile.',
  description: 'Ecossistema React ⚛️',
  profileImageLink:
    'https://avatars.githubusercontent.com/u/56849825?s=400&u=92e7c68a98c695bfdb70d429bad1c4072d38ca70&v=4',
  resume:
    'https://drive.google.com/file/d/1nE-d0MXfiJmRDZWwsMCC8wVfLsZLTcv3/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/williamgomes-mobile/',
    github: 'https://github.com/williamgomes62',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'WaiterApp',
    description:
      'Aplicação web e mobile para gerenciamento de pedidos, voltada à garçons. O WaiterApp é uma alternativa para substituir as comandas em papel.',
    stack: ['TypeScript', 'React', 'ReactNative', 'Styled-Components', 'Expo'],
    sourceCode: 'https://github.com/williamgomes62/waiter-app',
    livePreview: 'https://waiter-application.netlify.app/',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    name: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'React Native',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Jira',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  },
  {
    name: 'Scrum',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bamboo/bamboo-original.svg',
  },
  {
    name: 'Git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'HTML',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Firebase',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'Jest',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'williamlimagomes62@mail.com',
}

export { header, about, projects, skills, contact }
