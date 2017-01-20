import React from 'react';
import djb2 from './djb2';

const colors = [
  "red",
  "green",
  "blue",
  "purple",
  "orange",
  "grey",
  "yellow"
];

const UserIcon = ({username}) => {
  let color = colors[djb2(username, colors.length)];

  return (
    <div className={`user-icon-small ${color}`}
      title={username}
      alt={username}>
      <h5>{username[0]}</h5>
    </div>
  );
};

export default UserIcon;
