import React from 'react';
import monChouChou from '../../images/monchouchou.png'

export default function About() {
  return (
    <div className="display-flex row page-container">
      <div className='col'>
        <h1>About Me</h1>
        <p>
        After 5 years in the aerospace industry working as a technical hardware lead on NASA's new spacesuit development and, later, developing science instruments for other NASA and NASA-affiliated entities, Chloe looks forward to balancing her skillset with software experience.
        </p>
        <p>
        Chloe graduated with a BSEE and BA Russian Language in 2017. She enjoys urban sketching; oil painting; creating with textiles, reading, and writing.
        </p>
      </div>
      <div className='col'>
        <img src={monChouChou} alt="profile img of Chloe"></img>
      </div>
    </div>
  );
}
