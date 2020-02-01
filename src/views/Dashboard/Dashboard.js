import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Print from '@material-ui/icons/Print';
import IconButton from '@material-ui/core/IconButton';
import { letters } from '../../data'

import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders
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
    order: 2
  },
  print: {
    order: 1,
    textAlign: 'center',
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
      order: 2
    }
  }
}));

const Dashboard = ({
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
        <Grid
          item
          lg={5}
          md={5}
          xl={5}
          xs={5}
          className={classes.back}
        >
          {letters[prevId] && <RouterLink to={`/letter/${prevId}`}>
            <IconButton>
              <ArrowBack />
            </IconButton>
          </RouterLink>}
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          xl={2}
          xs={2}
          className={classes.print}
        >
          <RouterLink to={`/letter/${id}/print`}>
            <IconButton>
              <Print />
            </IconButton>
          </RouterLink>
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          xl={5}
          xs={5}
          className={classes.next}
        >
          {letters[nextId] && <RouterLink to={`/letter/${nextId}`}>
            <IconButton>
              <ArrowForward />
            </IconButton>
          </RouterLink>}
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
          className={classes.letter}
        >
          <LatestSales letterData={letter}/>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
          className={classes.envelope}
        >
          <UsersByDevice {...letter}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
