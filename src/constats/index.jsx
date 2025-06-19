import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `
I am a dedicated learner in machine learning engineering and deep learning, enhancing his expertise in these cutting-edge fields. With a strong foundation in web development, he is proficient in front-end technologies like React and back-end databases such as MySQL and MongoDB. Combining his passion for innovative solutions and robust web applications, Priyansh aims to leverage his diverse skill set to drive business growth and deliver exceptional user experiences.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.

Currently, I am expanding my expertise into machine learning engineering and deep learning, fascinated by their potential to transform industries and enhance decision-making processes. By integrating my full stack development skills with my growing knowledge in these advanced fields, I aim to develop comprehensive and innovative solutions.

Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects, always seeking opportunities to learn and grow in the ever-evolving tech landscape.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Sault",
    image: project6,
    description:
    `
 I recently built a project called SAULT – a secure document vault developed during a 36-hour hackathon. It uses blockchain smart contracts for tamper-proof document storage and digital signatures, ensuring top-level security. I integrated Gemini AI for smart document categorization and natural language retrieval, along with an AI-powered chatbot for insights and queries. The platform is deployed on Cloudflare with a CI/CD pipeline and uses IPFS for decentralized file storage.
    `,
    technologies: ["React", "Tailwind", "IPFS","Gemini" ],
    live:`https://sault.codemon.tech/`,
    github: `https://github.com/PRIYANSH-2004/Sault`,
  },
  {
    title: "Book Recommendation System",
    image: project1,
    description:
      `
I implemented a collaborative filtering algorithm with Python, Pandas, and Scikit-learn for book recommendations and designed a popularity-based recommendation system. I processed a dataset of over 50K book ratings and built a responsive web application using Flask to provide personalized book suggestions.
      `,
    technologies: ["Python", "NLP", "Flask", "Machine Learning", "Git"],
    live:`https://github.com/PRIYANSH-2004/Book-Recommender`,
    github: `https://github.com/PRIYANSH-2004/Book-Recommender`,
  },
  {
    title: "Mail Spam Detection",
    image: project2,
    description:
      `
      I developed a spam detection model using Python, Scikit-learn, and NLTK, achieving 94% accuracy with Multinomial Naive Bayes. I performed data cleaning, label encoding, tokenization, stemming, and count vectorization. Additionally, I created and deployed a user-friendly web app with Streamlit for real-time spam detection
      `,
    technologies: ["Python", "Machine Learning", "NLP", "Stream Lit", "Git"],
    live:`https://spam-detection-1-r9wb.onrender.com/`,
    github: `https://github.com/PRIYANSH-2004/spam-detection`,
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS","framer-motion"],
    live:`https://portfolio-zeta-dun-43.vercel.app/`,
    github: `https://github.com/PRIYANSH-2004/Portfolio`,
  },
  {
    title: "Snake Game",
    image: project4,
    description:
    `
    I developed a classic Snake game using HTML, CSS, and JavaScript. I implemented game logic, rendering, and user controls to create an engaging gameplay experience. The game features responsive design and smooth animations for an interactive and enjoyable user experience.
    `,
    technologies: ["HTML", "CSS", "JavaScript"],
    live:`https://snake-game-pearl.vercel.app/`,
    github: `https://github.com/PRIYANSH-2004/snake_game`,
  },
  {
    title: "Tic Tac Toe Game",
    image: project5,
    description:
    `
I created a Tic Tac Toe game using HTML, CSS, and JavaScript. I implemented game logic, player turns, and win conditions to ensure a functional and engaging experience. The game features an intuitive interface and smooth interaction for a seamless user experience.
    `,
    technologies: ["HTML", "CSS", "JavaScript"],
    live:`https://tic-tac-toe-eta-sage.vercel.app/`,
    github: `https://github.com/PRIYANSH-2004/tic-tac-toe`,
  },
];

export const CONTACT = {
  address: " Knapur, U.P, INDIA ",
  phoneNo: "+91 7355250737",
  email: "priyanshsingh.pr@gmail.com",
};
