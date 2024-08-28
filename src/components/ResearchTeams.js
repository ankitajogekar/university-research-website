import React from 'react';

const teams = [
  { name: 'Dr. John Doe', expertise: 'Artificial Intelligence' },
  { name: 'Dr. Jane Smith', expertise: 'Quantum Computing' },
  // Add more static team members here
];

function ResearchTeams() {
  return (
    <div>
      <h2>Research Teams</h2>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>
            <h3>{team.name}</h3>
            <p>Expertise: {team.expertise}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResearchTeams;
