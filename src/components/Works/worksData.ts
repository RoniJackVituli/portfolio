import estudy from "../../img/estudy.jpeg";
import gtw from '../../img/gtw.jpeg'
import ls from '../../img/link-short.jpeg'
import weather from '../../img/weather.png';
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
      "Who among us was a student and didn't look for summaries, helping materials, or even an old tests at difficult times when help was in need?. Estudy is a project that comes to help collect all Homework, Tests, Projects, Notebooks of students to help others succeed in the degree.",
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
  {
    title: "weather",
    description: "In this project, I learn how to build a website that show to you the weather in your location. also you can search city that you want to see the weather",
    tech: "React",
    url: "https://weather-rjv.netlify.app/",
    github: "https://github.com/RoniJack/weather-app/tree/main",
    img: weather,
  },




];

export default projects;
