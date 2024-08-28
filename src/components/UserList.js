import React from 'react';

const UserCard = ({ user, onSelect, isSelected }) => (
  <div className={`user-card ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(user)}>
    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
    <h3>{user.first_name} {user.last_name}</h3>
    <p>Email: {user.email}</p>
    <p>Domain: {user.domain}</p>
    <p>Gender: {user.gender}</p>
    <p>Available: {user.available ? 'Yes' : 'No'}</p>
  </div>
);

export default UserCard;