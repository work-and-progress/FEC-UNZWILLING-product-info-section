import React from 'react';
import PropTypes from 'prop-types';

class DropdownMenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { menuList } = this.props;
    return (
      <li>
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
