import diploma from '../assets/diploma.png';
import profileImg from '../assets/profile.jpg';

export const USER_DATA = {
  img: profileImg,
  firstName: 'Milda',
  lastName: 'Ruzgienė',
  jobTitle: 'Junior FrontEnd Developer',
  contacts: {
    email: 'milda.marcinkute@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/milda-ruzgienė',
    gitHub: 'https://github.com/MildaRuz',
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Tailwind',
    'Manual testing',
    'Postman',
    'Cypress',
    'WebDriverIO',
  ],
  basics: [
    'MySQL',
    'Bootstrap',
    'Jira',
    'testomat.io',
    'Gherkin syntax',
    'JMeter',
    'PostgreSQL',
    'CI/CD in GitHub actions',
  ],
  languages: ['Lithuanian - native', 'English'],
  interests: ['time with family', 'picking mushrooms', 'walking', 'fishing'],
  education: {
    title: 'education',
    items: [
      {
        title: 'Quality Assurance student',
        company: 'Baltic Institute of Technology',
        year: 'Mar 2024 - Jun 2024',
        description:
          'I have completed a Quality Assurance course. I am familiar with the Jira environment and have knowledge of various testing types. I have experience in writing test cases, using Gherkin syntax, performing REST API automated testing with Postman, conducting automated testing with Cypress, and working with CI/CD using GitHub Actions.',
      },
      {
        title: 'Junior FrontEnd Developer',
        company: 'Baltic Institute of Technology',
        year: 'Sep 2023 - Feb 2024',
        description:
          'Almost 6 months intensive self-sufficient learning and working in small teams. Passed theory test and 5 hours exam to create full React (front-end, back-end with MySQL database) application. Got a dilpoma for Junior Developer.',
        diploma: diploma,
      },
      {
        title: "Master's degree, Textile Engineering",
        company: 'Kaunas University of Technology',
        year: '2009 - 2011',
        description:
          'Team work, experience in organizing events, textiles. Work on two projects, and have a public presentations.',
        activitiesAndSoc: 'Students Union, Erasmus program (studies in ENSAIT, France).',
      },
      {
        title: "Bachelor's degree, Textile Engineering",
        company: 'Kaunas University of Technology',
        year: '2005 - 2009',
        description: 'Textiles, team work, experience in organizing events.',
        activitiesAndSoc: 'Students Union.',
      },
    ],
  },
  workingExperience: [
    {
      title: 'Technologist, in Printing Department',
      company: 'AB Audimas Supply',
      year: 'Feb 2014 - Feb 2023',
      description:
        'Development and quality control of new printings, documentation writing. Supervision in heat transfers, quality control in production. Fast problem solving skills. Management of a team of 10-15 people. Working with Dynamics NAV system.',
    },
    {
      title: 'Technology Assistant, in Printing Department',
      company: 'AB Audimas',
      year: 'Dec 2011 - Feb 2014',
      description:
        'Supervision in digital printing, heat transfers, quality control in production. Preparation and organization of work in production. Management of a team of 4-10 people.',
    },
  ],
};
