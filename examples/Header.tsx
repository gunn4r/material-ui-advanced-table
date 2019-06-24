import 'material-icons/iconfont/material-icons.css'

import React, { Component } from 'react';
import MaterialTable from 'material-ui-advanced-table';

class Demo extends Component<any, any> {
  state = {
    text: 'text',
    data: [
      { id: 1, name: 'Positive Energy', type: 'black tea', brand: 'Yogi', caffiene: 98},
      { id: 1, name: 'Blueberry Slim Life', type: 'green tea', brand: 'Yogi', caffiene: 45},
      { id: 1, name: 'Chai', type: 'black tea', brand: 'Twingings', caffiene: 48},
      { id: 1, name: 'Desert Lime', type: 'green tea', brand: 'Numi', caffiene: 0},
      { id: 1, name: 'Tropical Green', type: 'green tea', brand: 'Mighty Leaf', caffiene: 30},
    ],
    columns: [
      { title: 'Name', field: 'name', type: 'string' },
      { title: 'Tea Type', field: 'type', type: 'string' },
      { title: 'Brand', field: 'brand', type: 'string' },
      { title: 'Caffiene Content', field: 'caffiene', type: 'number' },
    ],
  }

  render() {
    return (
      <MaterialTable
        columns={this.state.columns}
        title="Tea"
        options={{search: true}}
        data={this.state.data}
      />
    );
  }
}

export default Demo;