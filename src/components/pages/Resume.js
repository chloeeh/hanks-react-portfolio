import React from 'react';

export default function Resume() {
    return (
        <div className="page-container">
            <div>
                <h1>Resumé</h1>
                <a
                    href="https://docs.google.com/document/d/1S3ikoWcyBO1c8vkfUyj0PWKkMAos0RyZ/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-container__link btn-general"
                >
                    <i className="fa-solid fa-download" /> Download
                </a>
           
            </div>
        </div>
    );
}