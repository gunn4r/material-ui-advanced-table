import './story.css';
import { storiesOf, module } from '@storybook/react';
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import Demo from '../examples/Demo.tsx';

const DemoCode = require('!raw-loader!../examples/Demo.tsx').default;

const Code = props => (
  <React.Fragment>
    <Divider style={{ marginTop: '18px' }} />
    <Box mt={2} p={2} boxShadow={2} bgcolor="background.paper">
      <Typography variant="subtitle2">EXAMPLE CODE</Typography>
      <Box
        component="pre"
        p={1}
        style={{
          overflowX: 'auto',
          fontSize: 11,
        }}
        {...props}
      />
    </Box>
  </React.Fragment>
);

const MUIWrapper = storyFn => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl" style={{ padding: '18px 0' }}>
      {storyFn()}
    </Container>
  </React.Fragment>
);

storiesOf('Example', module)
  .addDecorator(MUIWrapper)
  .add('Original Demo', () => {
    return (
      <React.Fragment>
        <main>
          <Demo />
        </main>
        <Code>{DemoCode}</Code>
      </React.Fragment>
    );
  })
  .add('Search Text Props', () => {
    return (
      <React.Fragment>
        <main>
          <Demo searchText="Ge" noRemote />
        </main>
      </React.Fragment>
    );
  });
