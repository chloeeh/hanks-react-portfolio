import React from 'react';
import '../App.css';

export default function Resume() {
    return (
        <div className="page-container container flex flex-col">
            <div className='flex flex-col resume-link pb-10 '>
                <h1>Résumés</h1>
                <ul>
                    <li>
                        <a
                        className="resume-link clicked mr-5"
                        href="docs/eng_hanksChloe.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="eng_hanksChloeResume">
                        Download Engineer Resume
                        </a> 
                    </li>
                    <li>
                        <a
                        className="resume-link clicked mr-5"
                        href="docs/dev_hanksChloe.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="dev_hanksChloeResume"> 
                        Download Web Developer Resume
                        </a>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col w-fit'>
                <h2 className='flex font-bold pb-2 mr-5'>Web Dev Proficiencies</h2>
                <div className='flex flex-row flex-wrap'>
                    <div className='flex flex-col'>
                        <h3 className='text-2xl'>Front End</h3>
                        <ul className="list-disc"> 
                            <li>ReactJS</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Mobile First/Responsive Design</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>

                    <div className='flex flex-col flex-wrap'>
                        <h3 className='text-2xl'>Back End</h3>
                        <ul className="list-disc"> 
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>MERN</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}