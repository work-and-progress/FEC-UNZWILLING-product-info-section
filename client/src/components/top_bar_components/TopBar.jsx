import React from 'react';
import DropDownMenus from './DropDownMenus';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>RENDER TopBar</h1>
        <DropDownMenus />
      </div>
    );
  }
}

export default TopBar;
