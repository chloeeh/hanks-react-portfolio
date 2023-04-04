import React from 'react';
import '../../App.css';

import monChouChou from '../../images/monchouchou.png'

export default function About() {
  return (
    <div className="display-flex row page-container">
      <div className='col'>
        <h1>About Me</h1>
        <p className='text-2xl'>
        After 5 years in the aerospace industry working as a technical hardware lead on NASA's new spacesuit development and, later, developing science instruments for NASA-affiliated entities, Chloe looks forward to balancing her skillset with software experience.
        </p>
        <p className='text-2xl'>
        Chloe graduated with a BSEE (+ Mathematics Minor) and a BA Russian Language in 2017; she graduated from the University of Texas-San Antonio Fullstack Web Development Bootcamp in 2023. She enjoys urban sketching; oil painting; creating with textiles; reading, and writing.
        </p>
      </div>
      <div className='col'>
        <img src={monChouChou} alt="profile img of Chloe"></img>
      </div>
    </div>
  );
}
