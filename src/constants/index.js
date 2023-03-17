import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  carrent,
  BrightLogo,
  InglesLogo,
  ReactLogo,
  UniLogo,
  booksLibrary,
  emojiSelector,
  gifApp,
  todoApp,
  weatherApp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Videogames Developer with godot",
    company_name: "Universidad de Colima",
    icon: UniLogo,
    iconBg: "#383E56",
    date: "Jan 2021 - June 2021",
    points: [
      "Developing and designing a platform videogame that helps you decrease your anxiety levels",
      "Working in a team and getting new communication skills",
      "Participate in weekly meetings to showcase progress",
    ],
  },
  {
    title: "English Student",
    company_name: "Inglés Individual",
    icon: InglesLogo,
    iconBg: "#E6DEDD",
    date: "April 2022 - March 2022",
    points: [
      "Starting to learn a English from scratch.",
      "I was helped by teachers that taught me and motivated me how to speak with confidence and fluently.",
      "Participaing in conversation clubs with other students",
      "Learning new vocabulary and English grammar",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Brightcoders",
    icon: BrightLogo,
    iconBg: "#383E56",
    date: "Nov 2021 - May 2022",
    points: [
      "Developing and maintaining web applications using React Native",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Self-taught-person",
    icon: ReactLogo,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developing personal projects and learning React by watching tutorials and looking up information",
      "Implementing responsive design and ensuring cross-browser compatibility.",,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GifExpert App",
    description:
      "This app allows you to search for any type of gif you want. It uses the Giphy API and of course feel free to interact with it.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Giphy API",
        color: "pink-text-gradient",
      },
    ],
    image: gifApp,
    source_code_page: "https://gif-expert-app-hugoneytor.netlify.app/",
    source_code_link: "https://github.com/Hugoneytor/gif-finder-app",
  },
  {
    name: "Weather widget",
    description:
      "This is a widget to which you can consult the temperature and forecast of certain city in the world, You can see the information and a map that shows the city you looked up.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: weatherApp,
    source_code_page: "https://hugoneytor.github.io/weather-widget/",
    source_code_link: "https://github.com/Hugoneytor/weather-widget",
  },
  {
    name: "Todo App",
    description:
      "This is a simple To do list made in React to apply the knowledge acquired in one of the most used hooks in React, the UseState.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Hooks",
        color: "pink-text-gradient",
      },
    ],
    image: todoApp,
    source_code_page: "https://hugoneytor.github.io/Todo-App-useState-/",
    source_code_link: "https://github.com/Hugoneytor/Todo-App-useState-",
  },
  {
    name: "Book Library",
    description:
      "Here you can add the books you have started reading and add different types of information such as the book title, author, cover, and a review. This app was built with react-router-dom and useContext",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "React-Router-Dom",
        color: "pink-text-gradient",
      },
      {
        name: "useContext",
        color: "blue-text-gradient",
      },
    ],
    image: booksLibrary,
    source_code_page: "https://hugoneytor.github.io/book-library/",
    source_code_link: "https://github.com/Hugoneytor/book-library",
  },
  {
    name: "Emoji Selector",
    description:
      "This is an emoji selector app that allows you to insert emojis into your text. You can add them in the position you were before and continue writing in the input. This is a simple project designed primarily to practice using useRef and implementing it in a project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "useRef",
        color: "pink-text-gradient",
      },
    ],
    image: emojiSelector,
    source_code_page: "https://hugoneytor.github.io/emoji-selector/",
    source_code_link: "https://github.com/Hugoneytor/emoji-selector",
  },

];

export { services, technologies, experiences, testimonials, projects };