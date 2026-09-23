import frontendMentor from '../assets/favicons/frontend-mentor.png'
import mdn from '../assets/favicons/mdn.png'
import react from '../assets/favicons/react.png'
import claude from '../assets/favicons/claude.png'
import webDev from '../assets/favicons/web-dev.png'
import tailwind from '../assets/favicons/tailwind-css.png'
import devTo from '../assets/favicons/dev-to.png'
import javascriptInfo from '../assets/favicons/javascript-info.png'
import freeCodeCamp from '../assets/favicons/freecodecamp.png'
import cssGridGarden from '../assets/favicons/css-grid-garden.png'
import codepen from '../assets/favicons/codepen.png'
import canIUse from '../assets/favicons/can-i-use.png'
import smashingMagazine from '../assets/favicons/smashing-magazine.png'
import cssTricks from '../assets/favicons/css-tricks.png'
import stackOverflow from '../assets/favicons/stack-overflow.png'
import github from '../assets/favicons/github.png'
import flexboxZombies from '../assets/favicons/flexbox-zombies.png'
import flexboxFroggy from '../assets/favicons/flexbox-froggy.png'

// Static placeholder data, taken from the Figma screens
const frontendMentorBookmark = {
  id: 1,
  logo: frontendMentor,
  title: 'Frontend Mentor',
  url: 'frontendmentor.io',
  fullUrl: 'https://www.frontendmentor.io',
  description:
    'Improve your front-end coding skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs.',
  tags: ['Practice', 'Learning', 'Community'],
  views: 47,
  lastVisited: '23 Sep',
  createdAt: '15 Jan',
  isPinned: true,
}

const cssGridGardenBookmark = {
  id: 10,
  logo: cssGridGarden,
  title: 'CSS Grid Garden',
  url: 'cssgridgarden.com',
  fullUrl: 'https://cssgridgarden.com',
  description: 'A game for learning CSS grid layout. Grow your carrot garden by writing CSS grid code.',
  tags: ['CSS', 'Practice', 'Layout'],
  views: 8,
  lastVisited: '15 Jul',
  createdAt: '01 Feb',
}

// Home — "All bookmarks"
export const bookmarks = [
  frontendMentorBookmark,
  {
    id: 2,
    logo: mdn,
    title: 'MDN Web Docs',
    url: 'developer.mozilla.org',
    fullUrl: 'https://developer.mozilla.org',
    description:
      'The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.',
    tags: ['Reference', 'HTML', 'CSS', 'JavaScript'],
    views: 152,
    lastVisited: '24 Sep',
    createdAt: '10 Jan',
    isPinned: true,
  },
  {
    id: 3,
    logo: react,
    title: 'React Docs',
    url: 'react.dev',
    fullUrl: 'https://react.dev',
    description:
      'The library for web and native user interfaces. Build user interfaces out of individual pieces called components.',
    tags: ['JavaScript', 'Framework', 'Reference'],
    views: 0,
    lastVisited: 'Never',
    createdAt: '20 Feb',
  },
  {
    id: 4,
    logo: claude,
    title: 'Claude',
    url: 'claude.ai',
    fullUrl: 'https://claude.ai',
    description:
      'An AI assistant created by Anthropic that can help with analysis, writing, coding, math, and creative tasks through natural conversation.',
    tags: ['Tools', 'AI', 'Learning'],
    views: 73,
    lastVisited: '23 Sep',
    createdAt: '18 Feb',
  },
  {
    id: 5,
    logo: webDev,
    title: 'Web.dev',
    url: 'web.dev',
    fullUrl: 'https://web.dev',
    description:
      'Guidance to build modern web experiences that work on any browser. Learn about web vitals, PWAs, and more.',
    tags: ['Performance', 'Learning', 'Tips'],
    views: 15,
    lastVisited: '16 Aug',
    createdAt: '15 Feb',
  },
  {
    id: 6,
    logo: tailwind,
    title: 'Tailwind CSS',
    url: 'tailwindcss.com',
    fullUrl: 'https://tailwindcss.com',
    description: 'A utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.',
    tags: ['CSS', 'Framework', 'Tools'],
    views: 52,
    lastVisited: '19 Sep',
    createdAt: '12 Feb',
  },
  {
    id: 7,
    logo: devTo,
    title: 'Dev.to',
    url: 'dev.to',
    fullUrl: 'https://dev.to',
    description:
      'A constructive and inclusive social network for software developers. Share knowledge and grow your career.',
    tags: ['Community', 'Learning', 'Tips'],
    views: 19,
    lastVisited: '21 Sep',
    createdAt: '10 Feb',
  },
  {
    id: 8,
    logo: javascriptInfo,
    title: 'JavaScript.info',
    url: 'javascript.info',
    fullUrl: 'https://javascript.info',
    description:
      'The Modern JavaScript Tutorial. How it’s done now. From the basics to advanced topics with simple, but detailed explanations.',
    tags: ['JavaScript', 'Tutorial', 'Learning'],
    views: 41,
    lastVisited: '15 Sep',
    createdAt: '08 Feb',
  },
  {
    id: 9,
    logo: freeCodeCamp,
    title: 'freeCodeCamp',
    url: 'freecodecamp.org',
    fullUrl: 'https://www.freecodecamp.org',
    description:
      'Learn to code for free. Build projects. Earn certifications. An open source community that helps you learn to code with free online courses and certifications.',
    tags: ['Learning', 'Practice', 'Community'],
    views: 28,
    lastVisited: '30 Aug',
    createdAt: '05 Feb',
  },
  cssGridGardenBookmark,
  {
    id: 11,
    logo: codepen,
    title: 'CodePen',
    url: 'codepen.io',
    fullUrl: 'https://codepen.io',
    description: 'An online code editor and social development environment for front-end designers and developers.',
    tags: ['Tools', 'Practice', 'Community'],
    views: 34,
    lastVisited: '18 Sep',
    createdAt: '25 Jan',
  },
  {
    id: 12,
    logo: canIUse,
    title: 'Can I Use',
    url: 'caniuse.com',
    fullUrl: 'https://caniuse.com',
    description: 'Support tables for HTML5, CSS3, etc. Check browser compatibility for web technologies.',
    tags: ['Tools', 'Reference', 'Compatibility'],
    views: 67,
    lastVisited: '20 Sep',
    createdAt: '20 Jan',
  },
  {
    id: 13,
    logo: smashingMagazine,
    title: 'Smashing Magazine',
    url: 'smashingmagazine.com',
    fullUrl: 'https://www.smashingmagazine.com',
    description:
      'For web designers and developers. Articles on CSS, JavaScript, front-end, UX, design systems, and more.',
    tags: ['Design', 'Tutorial', 'Performance'],
    views: 23,
    lastVisited: '10 Sep',
    createdAt: '18 Jan',
  },
  {
    id: 14,
    logo: cssTricks,
    title: 'CSS-Tricks',
    url: 'css-tricks.com',
    fullUrl: 'https://css-tricks.com',
    description: 'Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.',
    tags: ['CSS', 'Tutorial', 'Tips'],
    views: 89,
    lastVisited: '22 Sep',
    createdAt: '12 Jan',
  },
  {
    id: 15,
    logo: stackOverflow,
    title: 'Stack Overflow',
    url: 'stackoverflow.com',
    fullUrl: 'https://stackoverflow.com',
    description:
      'The largest, most trusted online community for developers to learn, share their knowledge, and build their careers.',
    tags: ['Community', 'Reference', 'Tips'],
    views: 234,
    lastVisited: '24 Sep',
    createdAt: '08 Jan',
  },
  {
    id: 16,
    logo: github,
    title: 'GitHub',
    url: 'github.com',
    fullUrl: 'https://github.com',
    description:
      'Where the world builds software. Millions of developers and companies build, ship, and maintain their software on GitHub.',
    tags: ['Tools', 'Community', 'Git'],
    views: 198,
    lastVisited: '24 Sep',
    createdAt: '05 Jan',
  },
]

// Archived page
export const archivedBookmarks = [
  {
    id: 17,
    logo: flexboxZombies,
    title: 'Flexbox Zombies',
    url: 'mastery.games/flexboxzombies',
    fullUrl: 'https://mastery.games/flexboxzombies',
    description:
      'Master flexbox layout in CSS by playing a survival game. Use flexbox to position your crossbow and survive the zombie apocalypse.',
    tags: ['CSS', 'Practice', 'Layout'],
    views: 6,
    lastVisited: '18 Apr',
    createdAt: '22 Feb',
    isArchived: true,
  },
  {
    id: 18,
    logo: flexboxFroggy,
    title: 'Flexbox Froggy',
    url: 'flexboxfroggy.com',
    fullUrl: 'https://flexboxfroggy.com',
    description: 'A game where you help Froggy and friends by writing CSS flexbox code.',
    tags: ['CSS', 'Practice', 'Layout'],
    views: 12,
    lastVisited: '12 Jun',
    createdAt: '01 Feb',
    isArchived: true,
  },
]

// Tagged page — "Practice, CSS"
export const selectedTags = ['Practice', 'CSS']
export const taggedBookmarks = [...archivedBookmarks, cssGridGardenBookmark]

// Search page — results for "Flexbox"
export const searchQuery = 'Flexbox'
export const searchResults = archivedBookmarks
