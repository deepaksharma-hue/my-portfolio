// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import mitslogo from './assets/education_logo/mitslogo.png';
import jainlogo from './assets/education_logo/jainlogo.png';
import dcalogo from './assets/education_logo/dcalogo.jpg';
import Secondarylogo from './assets/education_logo/Secondarylogo.jpg';
import highlogo from './assets/education_logo/highlogo.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
   
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
       
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
    
     
      { name: 'JavaScript', logo: javascriptLogo },
    
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
       
        " Next Js",
      ],
    },
    
   
  ];
  
  export const education = [
    {
      id: 0,
      img: mitslogo,
      school: "MADHAV INSTITUTE OF TECHNOLOGY & SCIENCE, GWALIOR",
      date: "AUG 2024 - July 2026",
      grade: "6.40 CGPA",
      desc: "I am currently pursuing a Master of Computer Applications (MCA) from Madhav Institute of Technology & Science (MITS), Gwalior. Through this program, I am strengthening my knowledge of advanced computer science concepts such as data structures, software engineering, database management systems, web technologies, and application development. The MCA program is helping me enhance my analytical thinking, problem-solving skills, and practical understanding of modern IT systems.",
      degree: "  Master of Computer Applications (MCA) – Pursuing)",
    },
   
    {
      id: 1,
      img: jainlogo,
      school: " Jain Degree collage, Bhind ",
      date: "JULY 2018 - MARCH 2021",
      grade: "61%",
      desc: "I completed my Bachelor of Arts (B.A), where I developed strong communication skills, critical thinking abilities, and a broad understanding of social sciences and humanities. This program helped me improve my analytical skills and academic foundation.",
      degree: "Bachelor of Arts (B.A)",
    },

    {
      id: 2,
      img: dcalogo,
      school: " Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal, Madhya Pradesh, India ",
      date: "JULY 2019 - APRIL 2021",
      grade: "72%",
      desc: "I completed a Diploma in Computer Applications (DCA), which provided me with basic knowledge of computer systems, programming fundamentals, office tools, and database management. The course strengthened my technical foundation and computer proficiency",
      degree: "Diploma in Computer Applications (DCA)",
    },

    {
      id:3,
      img: Secondarylogo,
      school: " Chambal Higher Secondary School, Gadiya Raipur, porsa",
      date: "Apr 2017 - March 2018",
      grade: "62%",
      desc: "I completed my Higher Secondary education from Chambal Higher Secondary School, Gadiya Raipur, Porsa, Morena District, under the MP Board.",
      degree: "12th (Higher Secondary) – MP Board",
    },

    {
      id:4,
      img: highlogo,
      school: " City Central Higher Secondary School, Bhind",
      date: "Apr 2014 - March 2015",
      grade: "69%",
      desc: "I completed my Secondary (10th) education from City Central Higher Secondary School, Bhind, under the MP Board.",
      degree: "10th (Secondary) – MP Board",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "modern password generator app",
      description:"This is a modern password generator app with a stylish gradient background, dark/light mode toggle, and real-time password strength indicator. Users can customize password length, include numbers or special characters, and even define their own symbols. The UI is responsive, colorful, and easy to use for generating secure passwords.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/anoopsharmait/password-generator-react-anoop.git",
      webapp: "https://github.com/anoopsharmait/password-generator-react-anoop.git",
    },
   
    
  ];  
