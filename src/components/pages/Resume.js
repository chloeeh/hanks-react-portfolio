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

        </div>
    );
}