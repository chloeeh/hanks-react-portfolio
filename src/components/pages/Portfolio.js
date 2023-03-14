import React from 'react';
import Project from '../ProjectCard';

const projects = [
  {
    id: 1,
    image: "images/getStarted.png",
    name: "You Goal Girl",
    alt: "project 2 of course",
    description: "frontend, backend, handlebars",
    liveLink: "https://clj-yougoalgirl.herokuapp.com/",
    repoLink: "https://github.com/chloeeh/you-goal-girl",
  },
  {
    id: 2,
    image: "images/proj1-cover.png",
    name: "Guild Wars 2",
    alt: "project 1 of course",
    description: "",
    liveLink: "https://mdinkelbach.github.io/gw2-gold-conversion/",
    repoLink: "https://github.com/mdinkelbach/gw2-gold-conversion",
  },
  {
    id: 3,
    image: "images/employeeTracker.png",
    name: "MySQL, Express, Node Employee Tracker",
    alt: "Terminal view for Employee Tracker",
    description: "",
    liveLink: "https://drive.google.com/file/d/1gwu9B5fioD3aYoOliYI1OG5N4ZJOeR_B/view",
    repoLink: "https://github.com/chloeeh/hanks-employee-tracker",
  },
  {
    id: 4,
    image: "images/weather-display.png",
    name: "Weather Dashboard",
    alt: "weather for New Orleans",
    description: "",
    liveLink: "https://chloeeh.github.io/hanks-weather-dashboard/",
    repoLink: "https://github.com/chloeeh/hanks-weather-dashboard",

  },
  {
    id: 5,
    image: "images/hanks-workday-scheduler.png",
    name: "Workday Scheduler",
    alt: "Workday Calendar View",
    description: "",
    liveLink: "https://chloeeh.github.io/hanks-workday-scheduler/",
    repoLink: "https://github.com/chloeeh/hanks-workday-scheduler",
  },
  {
    id: 6,
    image: "images/large-screen.png",
    name: "First Portfolio: CSS/HTML",
    alt: "screenshot of css/html portfolio",
    description: "",
    liveLink: "https://chloeeh.github.io/hanks-portfolio/",
    repoLink: "https://github.com/chloeeh/hanks-portfolio",
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className='col page-container'>
      <h1>Portfolio</h1>
      <Project projects={projects} />
    </div>
  );
}