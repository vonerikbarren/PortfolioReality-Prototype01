import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "purple",
    backgroundColor: "rgba(130, 0, 120, 0.2)"
  },
  Appbar: {
    backgroundColor: "indigo"
  },
  Typography: {
    color: "purple"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },


}))

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {

  const mui = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>

        <AppBar className={mui.Appbar}>
          <Toolbar>
            <Typography className={mui.Typography} variant="h6">Greysi Consulting LLC</Typography>
            <Container maxWidth="sm" />
            <Button>Testing</Button>
            <Button>Testing</Button>
            <Button>Testing</Button>
            <Button>Testing</Button>
          </Toolbar>
        </AppBar>

      </HideOnScroll>
      <Toolbar /
      >
      <Container>
        {/* <Box my={2}>
          {[...new Array(120)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box> */}
      </Container>
    </React.Fragment>
  );
}
