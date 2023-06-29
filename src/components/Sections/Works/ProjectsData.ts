import letsdeal from "../../../assets/imgs/LetsDeal.png";
import gitprofile from "../../../assets/imgs/GitProfile.png";
import guesstheword from '../../../assets/imgs/GuessTheWord.png';
import estudy from '../../../assets/imgs/estudy.png';


type ProjectData = {
  title: string;
  description: string;
  tech: string;
  url: string;
  github?: string;
  img: string;
};

export const projects: ProjectData[] = [
  {
    title: "LetsDeal",
    description:
      " The LetsDeal was created in 2022. The website was created for customers who want to find the cheapest price for the product they are looking for. In addition, the website was established in order to create a revolution in the field of deals, coupons, and online sales.\n\nI did not do this project alone, my part of the project was client side (Frontend).",
    tech: "React",
    url: "https://lets-deal.net/",
    img: letsdeal,
  },
  {
    title: "Guess The Word",
    description:
    "Guess The Word is based on the game `'Wordle'` the most popular game today. The technologies I used to develop the game are: React, TypeScript, VScode.",
    tech: "React",
    url: "https://guesstheword-rjv.netlify.app/",
    github: "https://github.com/RoniJack/guess-the-word",
    img: guesstheword,
  },
  {
    title: "GitProfile",
    description:
    "This project comes to help people who want to design their personal profile on Git.You can write about your personal abilities also to presenting your skills, and in which social networks you are active. you also can see the code in my GitHub. The technologies I used: React, TypeScript, SASS, HTML, Redux",
    tech: "React",
    url: "https://profilegit.netlify.app/",
    github: "https://github.com/RoniJack/guess-the-word",
    img: gitprofile,
  },
  {
    title: "Estudy",
    description:
      "Who among us was a student and didn't look for summaries, helping materials, or even an old tests at difficult times when help was in need?. Estudy is a project that comes to help collect all Homework, Tests, Projects, Notebooks of students to help others succeed in the degree.",
    tech: "django",
    url: "http://estudy-sce.herokuapp.com/",
    github: "https://github.com/Project-Management-SCE/estudy-sce-web",
    img: estudy,
  },
  // {
  //   title: "short-url",
  //   description:
  //     "In this project, I learn how to build a website that shortens URLs. Optimizing the length of your website's URLs is useful on space-sensitive forums, helps websites rank better in search results, and are also easier for users to type out.",
  //   tech: "React",
  //   url: "https://short-url-rjv.herokuapp.com/",
  //   github: "https://github.com/RoniJack/short-url",
  //   img: '',
  // },
];
