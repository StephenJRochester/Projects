import { useState, useEffect } from "react";


function  ProjectDisplay() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/projects/")
            .then((response) => response.json())
            .then((data) => setProjects(data)); 
    }, []); 
  
    
    
    return (
        <div>
            <h4>Project Display Component</h4>
            {projects.map((project) => (
                <div key={project.code}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}   
export default ProjectDisplay