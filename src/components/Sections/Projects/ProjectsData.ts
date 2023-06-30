import letsdeal from "../../../assets/images/letsdeal.png";
import gitprofile from "../../../assets/images/gitprofile.png";
import wingame from "../../../assets/images/wingame.png";
import estudy from "../../../assets/images/estudy.png";
import guesstheword from "../../../assets/images/GuessTheWord.png";

import letsdeal_logo from "../../../assets/logos/letsdeal-logo.png";
import gitprofile_logo from "../../../assets/logos/gitprofile.png";
import wingame_logo from "../../../assets/logos/wingame-logo.png";
import estudy_logo from "../../../assets/logos/ES-logo.png";
import guesstheword_logo from "../../../assets/logos/guesstheword-logo.png";

export type ProjectData = {
  title: string;
  description: string;
  tech: string;
  url: string;
  github?: string;
  logo: string;
  img: string;
};

export const projects: ProjectData[] = [
  {
    title: "Win-Game",
    description: `WinGame is a website that show you all the data about esports games, whether it's tournaments, news, and watching a live streamer. Our platform was built with a deep thought for the world's gamer users, in order to guarantee them a friendly and easy-to-use interface. On the website you can guess about results on esports games and even open a group of friends that you can compete against each other, with WinGame you can find all the necessary information in order to guess what the best way is about the games and how to profit from it.`,
    tech: "React",
    url: "https://wingame-sce.netlify.app/",
    logo: wingame_logo,
    img: wingame,
  },
  {
    title: "LetsDeal",
    description:
      "LetsDeal was created in 2022. The website was created for customers who want to find the cheapest price for the product they are looking for. In addition, the website was established in order to create a revolution in the field of deals, coupons, and online sales.\n\nI did not do this project alone, my part of the project was client side (Frontend).",
    tech: "React",
    url: "https://lets-deal.net/",
    logo: letsdeal_logo,
    img: letsdeal,
  },
  {
    title: "GitProfile",
    description:
      "This project comes to help people who want to design their personal profile on Git.You can write about your personal abilities also to presenting your skills, and in which social networks you are active. you also can see the code in my GitHub. The technologies I used: React, TypeScript, SASS, HTML, Redux",
    tech: "React",
    url: "https://profilegit.netlify.app/",
    github: "https://github.com/RoniJack/guess-the-word",
    logo: gitprofile_logo,
    img: gitprofile,
  },
  {
    title: "Guess The Word",
    description:
      "Guess The Word is based on the game `'Wordle'` the most popular game today. The technologies I used to develop the game are: React, TypeScript, VScode.",
    tech: "React",
    url: "https://guesstheword-rjv.netlify.app/",
    github: "https://github.com/RoniJack/guess-the-word",
    logo: guesstheword_logo,
    img: guesstheword,
  },
  {
    title: "Estudy",
    description:
      "Who among us was a student and didn't look for summaries, helping materials, or even an old tests at difficult times when help was in need?. Estudy is a project that comes to help collect all Homework, Tests, Projects, Notebooks of students to help others succeed in the degree.",
    tech: "django",
    url: "",
    github: "https://github.com/Project-Management-SCE/estudy-sce-web",
    logo: estudy_logo,
    img: estudy,
  },
];
