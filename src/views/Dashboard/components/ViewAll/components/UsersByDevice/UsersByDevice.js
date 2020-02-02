import React, { useEffect } from 'react';
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
    fontFamily: 'postcard',
    fontSize: '38px',
    letterSpacing: '-2px',
    lineHeight: '28px',
    position: 'relative',
    textAlign: 'center',
    border: 'none',
    boxShadow: 'none'
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
  const { className, address, telegram, postcard, onActiveService, date, ...rest } = props;

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

  const addressArray = address.split(',');
  const [, ...latterAddress] = addressArray;

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
    document.title = `${date.match(/\d+/g)[1]}-${date.match(/\d+/g)[0]}`
  }, [])

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div style={{ fontSize: 26, letterSpacing: 1, marginBottom: 10, marginTop: 40 }}>
          The Letters of
        </div>
        <div className={`${classes.chartContainer}`}>
          Pte. Bernard Charles Shepherd
        </div>
        <div style={{ fontSize: 14, letterSpacing: 1, width: 414, margin: 'auto', lineHeight: 1.2, marginTop: 20 }}>
          Written during his millitary engagements in Britain, France, Holland, and Germany in the Second World War.
        </div>
        <div style={{ fontSize: 20, letterSpacing: 1, marginTop: 30 }}>
          Book 1
        <div style={{ fontSize: 14, letterSpacing: 1 }}>
          June 1942 - December 1945
        </div>
        <img style={{width: 300, borderRadius: '50%', marginTop: 20, border: '2px solid black'}} src="/images/main.png" />
        </div>
        <div style={{ fontSize: 14, letterSpacing: 1, lineHeight: 1.2, width: 410,margin: 'auto', marginTop: 30 }}>
          This verbatim transcription of his original letters was completed in February 2020 by M. Steel, his grandson, the font having been reproduced from the letters themselves.
        </div>
        <div style={{ fontSize: 10, letterSpacing: 1, lineHeight: 1.2, width: 200,margin: 'auto', marginTop: 30, marginBottom: 200 }}>
          Printed for Private Circulation, bound at the Sign of the Winged Horse
        </div>
      </CardContent>
    </Card>
  );
};

UsersByDevice.propTypes = {
  className: PropTypes.string
};

export default UsersByDevice;
