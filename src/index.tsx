import React from 'react';
import { defaultProps } from './default-props';
import { propTypes } from './propTypes';
import { MaterialTable } from './material-table';
import { withStyles } from '@material-ui/core';

(MaterialTable as any).defaultProps = defaultProps;
(MaterialTable as any).propTypes = propTypes;

const styles = () => ({
  paginationRoot: {
    width: '100%',
  },
  paginationToolbar: {
    padding: 0,
    width: '100%',
  },
  paginationCaption: {
    display: 'none',
  },
  paginationSelectRoot: {
    margin: 0,
  },
});

export const AdvancedMaterialTable = withStyles(styles, { withTheme: true })(
  (props: any) => <MaterialTable {...props} ref={props.tableRef} />
);

export * from './components';
