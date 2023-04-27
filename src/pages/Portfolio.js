import React from 'react';
import Project from '../components/ProjectCard';
import goalGetStarted from '../images/getStarted.png';
import guildWarsCover from '../images/proj1-cover.png';
import employeeTracker from '../images/employeeTracker.png';
import weatherDisplay from '../images/weather-display.png';
import workdayScheduler from '../images/hanks-workday-scheduler.png';
// import cssPortfolio from '../images/large-screen.png';
import bexarCountyMarket from '../images/bexarCountyMarket.png';

const projects = [
  {
    id: 1,
    image: bexarCountyMarket,
    name: "Bexar County Business",
    alt: "Bootcamp Final Project",
    description: "ReactJS, MongoDB, GraphQL",
    liveLink: "https://bexar-market.herokuapp.com/",
    repoLink: "https://github.com/jessicashong/bexar-market",
  },
  {
    id: 2,
    image: goalGetStarted,
    name: "You Goal Girl",
    alt: "project 2 of course",
    description: "frontend, backend, handlebars",
    liveLink: "https://clj-yougoalgirl.herokuapp.com/",
    repoLink: "https://github.com/chloeeh/you-goal-girl",
  },
  {
    id: 3,
    image: guildWarsCover,
    name: "Guild Wars 2",
    alt: "project 1 of course",
    description: "API, Inline-CSS, jQuery",
    liveLink: "https://mdinkelbach.github.io/gw2-gold-conversion/",
    repoLink: "https://github.com/mdinkelbach/gw2-gold-conversion",
  },
  {
    id: 4,
    image: employeeTracker,
    name: "Employee Tracker",
    alt: "Terminal view for Employee Tracker",
    description: "MySQL, Express, Node",
    liveLink: "https://drive.google.com/file/d/1gwu9B5fioD3aYoOliYI1OG5N4ZJOeR_B/view",
    repoLink: "https://github.com/chloeeh/hanks-employee-tracker",
  },
  {
    id: 5,
    image: weatherDisplay,
    name: "Weather Dashboard",
    alt: "weather for New Orleans",
    description: "",
    liveLink: "https://chloeeh.github.io/hanks-weather-dashboard/",
    repoLink: "https://github.com/chloeeh/hanks-weather-dashboard",

  },
  {
    id: 6,
    image: workdayScheduler,
    name: "Workday Scheduler",
    alt: "Workday Calendar View",
    description: "",
    liveLink: "https://chloeeh.github.io/hanks-workday-scheduler/",
    repoLink: "https://github.com/chloeeh/hanks-workday-scheduler",
  },
  // {
  //   id: 7,
  //   image: cssPortfolio,
  //   name: "First Portfolio: CSS/HTML",
  //   alt: "screenshot of css/html portfolio",
  //   description: "",
  //   liveLink: "https://chloeeh.github.io/hanks-portfolio/",
  //   repoLink: "https://github.com/chloeeh/hanks-portfolio",
  // },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className='col page-container'>
      <h1>Portfolio</h1>
      <Project projects={projects} />
    </div>
  );
}