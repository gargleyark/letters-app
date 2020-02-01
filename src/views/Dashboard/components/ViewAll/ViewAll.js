import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from 'react-router-dom'

import { letters } from '../../../../data'

import {
  LatestSales,
  UsersByDevice,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  back: {
    order: 0
  },
  next: {
    textAlign: 'right',
    order: 1
  },
  envelope: {
    order: 2,
    [theme.breakpoints.up('lg')]: {
      order: 3
    },
    '& > div': {
      minHeight: '142px',
    }
  },
  letter: {
    order: 3,
    [theme.breakpoints.up('lg')]: {
      order: 2,
      margin: 'auto'
    }
  },
}));

const ViewAll = ({
  match: { 
    params: {
      id
    }
  }
}) => {
  const classes = useStyles();
  const letter = letters[id]
  const nextId = parseInt(id) + 1
  const prevId = parseInt(id) - 1

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
      {
        // letters.map((letter, i) => (
          letter &&
          <Grid
            item
            lg={7}
            md={8}
            xl={10}
            xs={12}
            className={classes.letter}
            style={{
            }}
            >
            <UsersByDevice {...letter}/>
            <LatestSales letterData={letter}/>
          </Grid>
          || <Redirect to="/not-found" />
        // ))
      }
      </Grid>
    </div>
  );
};

export default ViewAll;
