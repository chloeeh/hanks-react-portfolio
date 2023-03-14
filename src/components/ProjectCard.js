import React from 'react';

export default function ProjectCard(props) {
    return (
        <div className="project-card">
            {props.projects.map((item) => {
                return (
                    <div className="card" key={item.id}>
                        <img src={item.image} className="card-img-top" alt={item.alt}></img>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <div className="card-body">
                            <a href={item.liveLink} className="card-link">Go to the App</a>
                            <a href={item.repoLink} className="card-link">View Repo</a>
                        </div>
                    </div>
                )}
            )}
        </div>
    );
}