import React from 'react';
import PropTypes from 'prop-types';

class DropDownMenuItems extends React.Component {
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

DropDownMenuItems.defaultProps = {
  menuList: null,
};

DropDownMenuItems.propTypes = {
  menuList: PropTypes.string,
};

export default DropDownMenuItems;
