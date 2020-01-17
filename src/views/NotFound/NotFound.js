import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  content: {
    paddingTop: 10,
    textAlign: 'center'
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        spacing={4}
      >
        <Grid
          item
          lg={6}
          xs={12}
        >
          <div className={classes.content}>
            <Typography variant="h1">
              404: That doesn't exist
            </Typography>
            <Typography variant="h3">
              <RouterLink to={`/letters`}>
                <IconButton>
                  <ArrowBack />
                </IconButton>
                Back
              </RouterLink>
            </Typography>
            <img
              alt="Under development"
              className={classes.image}
              src="/images/undraw_page_not_found_su7k.svg"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
