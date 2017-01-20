import React from 'react';
import UserIcon from './user_icon';

const MembersIcons = ({members}) => {
  const icons = [];
  const memberIds = Object.keys(members);
  const membersCount = memberIds.length;
  const limit = (membersCount > 5) ? 4 : membersCount;

  for (let i = 0; i < limit; i++) {
    let memberId = memberIds[i];
    let username = members[memberId].username;

    icons.push(<UserIcon username={username} key={i}/>);
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
