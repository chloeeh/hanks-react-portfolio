
import React from 'react';
import '../App.css';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div id="header" className='header'>
            <a 
            // className='navbar-brand ' 
            href="#aboutme" onClick={() => handlePageChange('About Me')} className={currentPage === 'About Me' ? 'nav-link active clicked' : 'nav-link'}>

                <h1 className='flex justify-content-center align-center m-auto pt-3'>Chloe Hanks</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </a>
        </div>
    )
}