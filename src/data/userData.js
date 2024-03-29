import profileImg from '../assets/prof.jpg';

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
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Tailwind'],
  languages: ['Lithuanian - native', 'English'],
  interests: ['reading', 'walking', 'picking mushrooms', 'jewellery making', 'fishing'],
  education: [
    {
      title: 'Junior FrontEnd Developer',
      company: 'Baltic Institute of Technology',
      year: 'Sep 2023 - Feb 2024',
      description:
        'Almost 6 months intensive self-sufficient learning and working in small teams. Passed theory test and 5 hours exam to create full React (front-end, back-end with MySQL database) application. Got a dilpoma for Junior Developer.',
    },
    {
      title: "Master's degree, Textile Engineering",
      company: 'Kaunas University of Technology',
      year: '2009 - 2011',
      description:
        'Team work, experience in organizing events, textiles. Work on two projects, and have a public presentation.',
      activitiesAndSoc: 'Students Union, Erasmus program (studies in ENSAIT, France)',
    },
    {
      title: "Bachelor's degree, Textile Engineering",
      company: 'Kaunas University of Technology',
      year: '2005 - 2009',
      description: 'Textiles, team work, experience in organizing events.',
      activitiesAndSoc: 'Students Union',
    },
  ],
  workingExperience: [
    {
      title: 'Technologist, in Printing Department',
      company: 'AB Audimas Supply',
      year: 'Feb 2014 - Feb 2023',
      description:
        'Development and quality control of new printings, documentation writing. Supervision in heat transfers, quality control in production. Management of a team of 10-15 people. Working with Dynamics NAV system.',
    },
    {
      title: 'Technology Assistant, in Printing Department',
      company: 'AB Audimas',
      year: 'Dec 2011 - Feb 2014',
      description:
        'Supervision in digital printing, heat transfers, quality control in production. Preparation and organization of work. Management of a team of 4-10 people.',
    },
  ],
};
