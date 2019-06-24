import React from 'react';
import PropTypes from 'prop-types';

class MTableActions extends React.Component<any, any> {

  render() {
    if (this.props.actions) {
      return this.props.actions.map((action, index) => (
        <this.props.components.Action action={action} key={"action-" + index} data={this.props.data} size={this.props.size} />
      ));
    }

    return null;
  }
}

(MTableActions as any).defaultProps = {
  actions: [],
  data: {}
};

(MTableActions as any).propTypes = {
  components: PropTypes.object.isRequired,
  actions: PropTypes.array.isRequired,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  size: PropTypes.string,
};

export default MTableActions;
