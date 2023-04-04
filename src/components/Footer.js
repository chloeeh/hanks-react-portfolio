
import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <div id="footer" className='d-flex justify-content-center '>
            <footer className="flex flex-row">
            <a className="flex mx-3 my-2 footer-icon" href="https://github.com/chloeeh"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
            <a className="flex mx-3 my-2 footer-icon" href="https://www.linkedin.com/in/chloehanks/"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
            <a className="flex mx-3 my-2 footer-icon" href="https://www.hanksfineart.com/"><FontAwesomeIcon icon={faPaintBrush} size="3x" /></a>
            </footer>
        </div>
    )
} 