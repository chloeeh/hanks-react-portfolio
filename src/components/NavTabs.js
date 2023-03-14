import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-bar">
            <li className="nav-page">
                <a href="#aboutme" onClick={() => handlePageChange('About Me')} className={currentPage === 'About Me' ? 'nav-link active clicked' : 'nav-link'}>About Me</a>
            </li>
            <li className="nav-page">
                <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active clicked' : 'nav-link'}>Portfolio</a>
            </li>
            <li className="nav-page">
                <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active clicked' : 'nav-link'}>Contact</a>
            </li>
            <li className="nav-page">
                <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active clicked' : 'nav-link'}>Resume</a>
            </li>
        </ul>
    );
};

export default NavTabs;
