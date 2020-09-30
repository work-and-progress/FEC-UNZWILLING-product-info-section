import React from 'react';
import DropDownMenuItems from './DropDownMenuItems';

class DropDownMenus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const dropDownMenuList = ['OUR BRANDS', 'CUTLERY', 'COOKWARE', 'ELECTRICS', 'STORAGE', 'TOOLS', 'TABLETOP', 'GIFTS', 'SALE', 'ABOUT US'];
    const DropDownMenuItemsComponent = dropDownMenuList.map(
      (menuList) => (<DropDownMenuItems menuList={menuList} key={menuList} />),
    );
    return (
      <div>
        <h1>RENDER DropDownMenus</h1>
        <ul>{DropDownMenuItemsComponent}</ul>
      </div>
    );
  }
}

export default DropDownMenus;
