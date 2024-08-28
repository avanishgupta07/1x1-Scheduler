import React from 'react';
import { useSelector } from 'react-redux';

const TeamDisplay = () => {
  const team = useSelector((state) => state.users.team);

  return (
    <div className="team-display">
      <h2>Current Team</h2>
      {team.length === 0 ? (
        <p>No team members selected yet.</p>
      ) : (
        <ul>
          {team.map(member => (
            <li key={member.id}>
              {member.first_name} {member.last_name} - {member.domain}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeamDisplay;