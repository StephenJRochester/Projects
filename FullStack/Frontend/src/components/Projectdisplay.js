import { useState, useEffect } from "react";
const UserCompany = "Testing123";

function  ProjectDisplay() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/projects/?company=${UserCompany}`)
            .then((response) => response.json())
            .then((data) => setProjects(data)); 
    }, []); 
  
    
    
  return (
    <div>
      <h2>Project List</h2>
      <table className="project-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.code}>
              <td>{project.code}</td>
              <td>{project.name}</td>
              <td>{project.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectDisplay;