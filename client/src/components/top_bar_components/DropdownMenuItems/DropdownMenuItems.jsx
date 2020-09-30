import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

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
        {menuList}
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
