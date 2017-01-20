import React from 'react';
import djb2 from './djb2';

const MembersIcons = ({members}) => {
  const icons = [];
  const memberIds = Object.keys(members);
  const membersCount = memberIds.length;
  const limit = (membersCount > 5) ? 4 : membersCount;
  const colors = [
    "red",
    "green",
    "blue",
    "purple",
    "orange",
    "grey",
    "yellow"
  ];

  for (let i = 0; i < limit; i++) {
    let memberId = memberIds[i];
    let username = members[memberId].username;
    let color = colors[djb2(username, 7)];

    icons.push(
      <div className={`user-icon-small ${color}`}
        title={username}
        alt={username}
        key={i}>
        <h5>{username[0]}</h5>
      </div>
    );
  }

  if (membersCount > 5) {
    const countText = (membersCount > 14) ? "..." : `+${membersCount - 4}`;
    icons.push(
      <div className="user-icon-small"
        title={`and ${membersCount - 4} more members`}
        alt={`and ${membersCount - 4} more members`}
        key={5}>
        <h5>{countText}</h5>
      </div>
    );
  }

  return (
    <ul className="members-icons">
      {icons}
    </ul>
  );
};

export default MembersIcons;
