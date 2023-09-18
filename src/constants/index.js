import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    recipes,
    shoes,
    weather,
    fullstack,
    responsive,
    dynamic,
    api,
    github,
    linkedin,
    gamerpad,
    python,
    mui,
    mysql,
    bootstrap
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "projects",
      title: "Portfolio",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: fullstack,
    },
    {
      title: "Responsive Web Design",
      icon: responsive,
    },
    {
      title: "Dynamic User Interfaces",
      icon: dynamic,
    },
    {
      title: "API Integration",
      icon: api,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Material UI",
      icon: mui,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
  ];
  
  const projects = [
    {
      name: "Epic Recipes",
      description:
        "A mobile responsive UI where users can search for recipes, browse results and view recipe ingredients and instructions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "materialUI",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: recipes,
      source_code_link: "https://github.com/SameerSondhi/Epic-Recipes",
      active_link: "https://epic-recipes-2.vercel.app/"
    },
    {
      name: "Emerge Footwear",
      description:
        "A mobile responsive UI where users can browse uniquely designed footwear, view their cart and place orders.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "ecommerce",
          color: "pink-text-gradient",
        },
      ],
      image: shoes,
      source_code_link: "https://github.com/SameerSondhi/EmergeFootwear",
      active_link: "https://emerge-footwear.vercel.app/"
    },
    {
      name: "GamerPad",
      description:
        "A responsive UI dedicated to displaying upcoming, unreleased video games for all gaming platforms.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: gamerpad,
      source_code_link: "https://github.com/SameerSondhi/GamerPad",
      active_link: "https://gamer-pad.vercel.app/"
    },
    {
      name: "WeatherCast",
      description:
        "A single page application (SPA) that allows users to enter a location and displays the current weather information.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/SameerSondhi/JavaScript-MERN/tree/main/WeatherCast",
      active_link: "#"
    },
  ];
  
  const contacts = [
    {
      index: '1',
      image: github,
      pro_link: "https://github.com/SameerSondhi",
    },
    {
      index: '2',
      image: linkedin,
      pro_link: "https://www.linkedin.com/in/sameer-sondhi/",
    },
  ];

  export { services, technologies, projects, contacts };