import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

export default function ProjectCard(props) {
    return (
        <div className='container m-auto'>
        <div className=" mx-auto project-card flex-1 flex flex-col items-center">
            {props.projects.map((item) => {
                return (
                    <div className="card w-50" key={item.id}>
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
        </div>
    );
}