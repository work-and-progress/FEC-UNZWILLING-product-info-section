import React from 'react';
import DropdownMenuItems from '../DropdownMenuItems/DropdownMenuItems';
import styles from './styles.css';

class DropdownMenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const dropDownMenuList = ['OUR BRANDS', 'CUTLERY', 'COOKWARE', 'ELECTRICS', 'STORAGE', 'TOOLS', 'TABLETOP', 'GIFTS', 'SALE', 'ABOUT US'];
    const dropdownMenuItemsComponent = dropDownMenuList.map(
      (menuList) => (<DropdownMenuItems menuList={menuList} key={menuList} />),
    );
    return (
      <div>
        <h1>RENDER dropDownMenuList</h1>
        <nav className={styles.nav}>
          <ul className={styles.ul}>{dropdownMenuItemsComponent}</ul>
        </nav>
      </div>
    );
  }
}

export default DropdownMenuList;
