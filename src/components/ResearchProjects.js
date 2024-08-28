import React from 'react';

const projects = [
  { title: 'AI in Healthcare', description: 'Research on AI applications in healthcare.' },
  { title: 'Quantum Computing', description: 'Exploring quantum computing technologies.' },
  // Add more static projects here
];

function ResearchProjects() {
  return (
    <div>
      <h2>Research Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResearchProjects;
