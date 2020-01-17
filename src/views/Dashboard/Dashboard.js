import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
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

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={6}
          className={classes.back}
        >
          <RouterLink to={`/letter/${parseInt(id) - 1}`}>
            <IconButton>
              <ArrowBack />
            </IconButton>
          </RouterLink>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={6}
          className={classes.next}
        >
          <RouterLink to={`/letter/${parseInt(id) + 1}`}>
            <IconButton>
              <ArrowForward />
            </IconButton>
          </RouterLink>
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
