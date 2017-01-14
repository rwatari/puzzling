import React from 'react';

const MembersIcons = ({members}) => {
  const icons = [];
  const membersCount = members.length;
  const limit = (membersCount > 5) ? 4 : membersCount;

  for (let i = 0; i < limit; i++) {
    let username = members[i].username;
    icons.push(
      <div className="user-icon-small"
        title={username}
        alt={username}
        key={i}>
        <h4>{username[0]}</h4>
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
        <h4>{countText}</h4>
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
