import React from 'react';
import DropdownMenus from '../DropdownMenus/DropdownMenus';

class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>RENDER TopNavBar</h1>
        <DropdownMenus />
      </div>
    );
  }
}

export default TopNavBar;
