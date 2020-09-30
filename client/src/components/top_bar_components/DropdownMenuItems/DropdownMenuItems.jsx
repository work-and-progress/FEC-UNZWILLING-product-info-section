/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import DropdownMenuSubitems from '../DropdownMenuSubitems/DropdownMenuSubitems';

class DropdownMenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { menuList } = this.props;
    return (
      <li className={styles.li}>
        <a className={styles.a}>{menuList}</a>
        <DropdownMenuSubitems />
      </li>
    );
  }
}

DropdownMenuItems.defaultProps = {
  menuList: null,
};

DropdownMenuItems.propTypes = {
  menuList: PropTypes.string,
};

export default DropdownMenuItems;
