import estudy from "../../img/estudy.png";
import gtw from '../../img/gtw.png'
import ls from '../../img/link-short.png'
export type ProjectData = {
  title: string;
  description: string;
  tech: string;
  url: string;
  github: string;
  img: string;
};

const projects: ProjectData[] = [
  {
    title: "estudy",
    description:
      "Who among us was a student and did not look for summaries or tests for example and anything that could help him at that time. Estudy is a project that comes to help collect all Homeworks, Tests, Projects, Notebooks of students in order to help other students also succeed in the degree.",
    tech: "django",
    url: "http://estudy-sce.herokuapp.com/",
    github: "https://github.com/Project-Management-SCE/estudy-sce-web",
    img: estudy,
  },
  {
    title: "guess-the-word",
    description: "Guess The Word is based on the game `'Wordle'` the most popular game today. The technologies I used to develop the game are: React, TypeScript, VScode.",
    tech: "React",
    url: "https://guess-the-word-rjv.netlify.app/",
    github: "https://github.com/RoniJack/guess-the-word",
    img: gtw,
  },
  {
    title: "short-url",
    description: "In this project, I learn how to build a website that shortens URLs. Optimizing the length of your website's URLs is useful on space-sensitive forums, helps websites rank better in search results, and are also easier for users to type out.",
    tech: "React",
    url: "https://short-url-rjv.herokuapp.com/",
    github: "https://github.com/RoniJack/short-url",
    img: ls,
  },




];

export default projects;
