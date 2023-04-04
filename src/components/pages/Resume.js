import React from 'react';

export default function Resume() {
    return (
        <div className="page-container">
            <div className='resume-link'>
                <h1>Resumé</h1>
                <ul>
                    <li>
                        <a
                        className="resume-link"
                        href="docs/eng_hanksChloe.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="eng_hanksChloeResume">
                        Download Engineer Resume
                        </a> 
                    </li>
                    <li>
                        <a
                        className="resume-link"
                        href="docs/dev_hanksChloe.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="dev_hanksChloeResume"> 
                        Download Web Developer Resume
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Front End</h2>
                <ul> 
                    <li>ReactJS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Mobile First/Responsive Design</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                </ul>

                <h2>Back End</h2>
                <ul> 
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
    );
}