import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import RefreshIcon from '@material-ui/icons/Refresh';
import TabletMacIcon from '@material-ui/icons/TabletMac';

const useStyles = makeStyles(theme => ({
  root: {
    height: 'auto',
    fontFamily: 'handwriting',
    fontSize: '38px',
    letterSpacing: '-2px',
    lineHeight: '28px',
    position: 'relative',
  },
  chartContainer: {
    position: 'relative',
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  },
  stamp: {
    height: '60px',
    transform: 'rotate(8deg)',
    float: 'right'
  },
  telegram: {
    fontFamily: 'telegram',
  },
  postcard: {
    fontFamily: 'postcard',
  },
  oas: {
    position: 'absolute',
    zIndex: 1,
    width: 170,
    height: 'auto',
    right: 14,
    bottom: 20
  }
}));

const UsersByDevice = props => {
  const { className, address, telegram, postcard, onActiveService, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.error.main,
          theme.palette.warning.main
        ],
        borderWidth: 8,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: ['Desktop', 'Tablet', 'Mobile']
  };

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    }
  };

  const devices = [
    {
      title: 'Desktop',
      value: '63',
      icon: <LaptopMacIcon />,
      color: theme.palette.primary.main
    },
    {
      title: 'Tablet',
      value: '15',
      icon: <TabletMacIcon />,
      color: theme.palette.error.main
    },
    {
      title: 'Mobile',
      value: '23',
      icon: <PhoneIphoneIcon />,
      color: theme.palette.warning.main
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="To:"
      />
      <Divider />
      <CardContent>
        <img className={classes.stamp} src="/images/stamp.png" />
        {onActiveService ? <img className={classes.oas} src="/images/oas.png" /> : ''}
        <div className={`${classes.chartContainer} ${telegram ? classes.telegram : ''}`}>
          {address}
        </div>
      </CardContent>
    </Card>
  );
};

UsersByDevice.propTypes = {
  className: PropTypes.string
};

export default UsersByDevice;
