// General
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

// MUI Imports
import { Table, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

// Local components

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    boldText: {
      fontWeight: 'bold',
    },
    totalsTable: {
      backgroundColor: `${theme.palette.grey[200]}`,
    },
    totalsTableRowHeight: {
      height: '32px',
    },
    totalsTableTitle: {
      minWidth: '60px',
    },
  })
);

const ConversationTotals: React.FC = () => {
  const classes = useStyles({});

  return (
    <Table className={classes.totalsTable}>
      <TableHead>
        <TableRow className={classes.totalsTableRowHeight}>
          <TableCell
            align={'center'}
            padding={'none'}
            className={classes.totalsTableTitle}
          >
            <Typography variant="caption" className={classes.boldText} color="primary">
              {'TOTALS'}
            </Typography>
          </TableCell>

          <TableCell align={'left'} padding={'none'}>
            <Typography variant="caption" className={classes.boldText}>
              {'Groups'}: 15
            </Typography>
          </TableCell>

          <TableCell align={'left'} padding={'none'}>
            <Typography variant="caption" className={classes.boldText}>
              {'Campaigns'}: 3
            </Typography>
          </TableCell>

          <TableCell align={'left'} padding={'none'}>
            <Typography variant="caption" className={classes.boldText}>
              {'Messages'}: 456
            </Typography>
          </TableCell>

          <TableCell align={'left'} padding={'none'}>
            <Typography variant="caption" className={classes.boldText}>
              {'Agents'}: 8
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default ConversationTotals;
