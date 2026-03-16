import { useState, useEffect } from "react";


function  ProjectDisplay() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("/api/projects/")
            .then((response) => response.json())
            .then((data) => setProjects(data)); 
    }, []); 
  
    
    
    return (
        <div>
            
            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}   
export default ProjectDisplay