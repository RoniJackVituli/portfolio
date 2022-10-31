import estudy from "../../img/estudy.jpeg";
import gtw from "../../img/gtw.jpeg";
import ls from "../../img/link-short.jpeg";
import LetsDeal from "../../img/lets-deal.png";
export type ProjectData = {
  title: string;
  description: string;
  tech: string;
  url: string;
  github?: string;
  img: string;
};

const projects: ProjectData[] = [
  {
    title: "LetsDeal",
    description:
      " The LetsDeal was created in 2022. The website was created for customers who want to find the cheapest price for the product they are looking for. In addition, the website was established in order to create a revolution in the field of deals, coupons, and online sales.\n\nI did not do this project alone, my part of the project was client side.(Frontend)",
    tech: "React",
    url: "https://lets-deal.net/",
    img: LetsDeal,
  },
  {
    title: "estudy",
    description:
      "Who among us was a student and didn't look for summaries, helping materials, or even an old tests at difficult times when help was in need?. Estudy is a project that comes to help collect all Homework, Tests, Projects, Notebooks of students to help others succeed in the degree.",
    tech: "django",
    url: "http://estudy-sce.herokuapp.com/",
    github: "https://github.com/Project-Management-SCE/estudy-sce-web",
    img: estudy,
  },
  {
    title: "guess-the-word",
    description:
      "Guess The Word is based on the game `'Wordle'` the most popular game today. The technologies I used to develop the game are: React, TypeScript, VScode.",
    tech: "React",
    url: "https://guess-the-word-rjv.netlify.app/",
    github: "https://github.com/RoniJack/guess-the-word",
    img: gtw,
  },
  {
    title: "short-url",
    description:
      "In this project, I learn how to build a website that shortens URLs. Optimizing the length of your website's URLs is useful on space-sensitive forums, helps websites rank better in search results, and are also easier for users to type out.",
    tech: "React",
    url: "https://short-url-rjv.herokuapp.com/",
    github: "https://github.com/RoniJack/short-url",
    img: ls,
  },
];

export default projects;
