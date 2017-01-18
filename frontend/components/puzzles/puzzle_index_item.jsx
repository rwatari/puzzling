import React from 'react';
import MembersIcons from '../user_home/members_icons';

class PuzzleIndexItem extends React.Component {

  render() {
    const {puzzle} = this.props;
    let followButton;
    return (
      <li className="partial-index-item">
        <div className="item-info">
          <div className="item-header">
            <h4>{puzzle.title}</h4>
            <h6>{`${puzzle.description.substring(0, 120)}...`}</h6>
          </div>
          <MembersIcons members={puzzle.solvers}/>
        </div>
        <div className="item-nav">
          <ul>
            <li>
              <button>
                <h4>Follow</h4>
              </button>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

export default PuzzleIndexItem;
