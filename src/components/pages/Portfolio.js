import React from 'react';
import Project from '../ProjectCard';

const projects = [
  {
    id: 1,
    image: "images/getStarted.png",
    name: "You Goal Girl",
    alt: "",
    description: "",
    link: "https://github.com/chloeeh/you-goal-girl",
  },
  {
    id: 2,
    image: "images/proj1-cover.png",
    name: "Guild Wars 2",
    alt: "screenshot",
    description: "",
    link: "tps://github.com/mdinkelbach/gw2-gold-conversion",
  },
//   {
//     id: 3,
//     image: "",
//     name: "Cyber-Retail API",
//     alt: "",
//     description: "",
//     link: "",
//   },
//   {
//     id: 4,
//     image: "",
//     name: "NoSQL",
//     alt: "",
//     description: "",
//     link: "",
//   },
//   {
//     id: 5,
//     image: "",
//     name: "NoSQL",
//     alt: "",
//     description: "",
//     link: "",
//   },
//   {
//     id: 6,
//     image: "",
//     name: "NoSQL",
//     alt: "",
//     description: "",
//     link: "",
//   },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className='col page-container'>
      <h1>Portfolio</h1>
      <Project projects={projects} />
    </div>
  );
}