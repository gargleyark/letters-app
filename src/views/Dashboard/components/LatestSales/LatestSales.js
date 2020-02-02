import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import { Redirect } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Box
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { data, options } from './chart';
import { letterSpacing } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {},
  letterContainer: {
    position: 'relative',
    fontFamily: 'handwriting',
    fontSize: '38px',
    letterSpacing: '-2px',
    lineHeight: '28px',
    color: '#555',
    textIndent: '30px',
    '& > p': {
      marginTop: '10px'
    }
  },
  letter: {
    fontFamily: 'handwriting',
  },
  actions: {
    justifyContent: 'flex-end',
  },
  telegram: {
    fontFamily: 'telegram',
  },
  postcard: {
    fontFamily: 'postcard',
    position: 'relative',
    '& p': {
      marginTop: 10,
    }
  },
  padded: {
    paddingLeft: 20,
  }, 
  strike: {
    textDecoration: 'line-through',
  },
  signature: {
    fontFamily: 'handwriting',
    fontSize: '38px',
    letterSpacing: '-2px',
    lineHeight: '28px',
    color: '#555',
  },
  dated: {
    fontFamily: 'handwriting',
    fontSize: '38px',
    letterSpacing: '-2px',
    lineHeight: '28px',
    color: '#555',
  },
  rightPadded: {
    left: 200,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      display: 'inline',
    }
  },
  letterSpacing: {
    letterSpacing: '1px'
  },
  commaSpacing: {
    paddingLeft: '3px'
  },
  censored: {
    position: 'relative',

    '&::before': {
      content: '"----------"',
      position: 'absolute',
      fontSize: '100px',
      fontWeight: 'bold',
      left: '0px',
      textAlign: 'left',
      textIndent: '0px',
      overflow: 'hidden',
      marginTop: '1px',
      height: '90%'
    }
  },
  blank: {
    padding: '0px 50px',
    display: 'inline-block'
  },
  drawing: {
    float: 'right',
    maxHeight: 140,
    maxWidth: 140
  }
}));

// "postcard":{
//          "status":"I am quite well",
//          "letters":"I have received your letter dated July 1st",
//          "next":"Letter follows at first opportunity",
//          "signed":"B Shepherd"
//       }
//    },
// "postcard":{
//          "status":"I am quite well",
//          "letters":"I have received your letter dated",
//          "next":"Letter follows at first opportunity",
//          "signed":"B Shepherd"
//       }
//    },
// "postcard":{
//          "status":"I am quite well",
//          "letters":"I have received your letter ",
//          "next":"Letter follows at first opportunity",
//          "signed":"B Shepherd"
//       }
//    },
// "postcard":{
//          "status":"I am quite well",
//          "letters":"I have received your letter(s)",
//          "next":"I will send you a letter as soon as possible"
//       }
//    },
//    {


const LatestSales = props => {
  const { className, letterData, showAddress, ...rest } = props;
  const classes = useStyles();

  if (!letterData) {
    return <Redirect to="/not-found" />
  }

  const {
    date,
    letter,
    telegram,
    postcard,
    message,
    address
  } = letterData;

  
  const createCensoredText = () => {
    const scramble = ['I', 'now', 'what', 'how', 'Britain', 'here', 'tomorrow', 'yes', 'abe', 'General' ,'peace']
      .sort(() => Math.random() > 0.5 && -1);
    
    return `<span class="${classes.censored}">${scramble.pop()} ${scramble.pop()} ${Math.random() > 0.5 && scramble.pop() || ''}</span>`
  };
  
  const makeLetter = text => `<p>${
    text
      .replace(/\n/g, `</p><p>`)
      .replace(/<p><\/p>/g, `<p><br /></p>`)
      .replace(/(\d+)/g, number => `<span class="${classes.letterSpacing}">${number}</span>`)
      .replace(/(\.|,)/g, punc => `<span class="${classes.commaSpacing}">${punc}</span>`)
      .replace(/\[censored\]/g, createCensoredText())
      .replace(/\[blank\]/g, `<span class="${classes.blank}"></span>`)
      .replace(/\[drawing\]/g, `<img class="${classes.drawing}" src="/images/letters/${date.replace(/\//g, '-')}.png"/>`)
    }</p>`;

  const getPostcard = ({ status, letters, dated, next, signed }) => (
    <div className={classes.postcard}>
      <p>NOTHING is to be written on this side except the date and signature of the sender. Sentences not required may be erased. <u>If anything else is added the post card will be destroyed.</u></p>
      <p>[Postage must be prepaid on any letter or post card addressed to the sender of this card.]</p>
      <p className={status === 'I am quite well' ? '' : classes.strike}>I am quite well.</p>
      <p className={status === 'I have been admitted into hospital' ? '' : classes.strike}>I have been admitted into hospital</p>
      <p>
        <span className={`${status === 'sick' ? '' : classes.strike} ${classes.padded}`}>sick</span>
        <span className={`${status === 'well' ? '' : classes.strike} ${classes.rightPadded}`}>and am going on well.</span>
      </p>
      <p>
        <span className={`${status === 'wounded' ? '' : classes.strike} ${classes.padded}`}>wounded</span>
        <span className={`${status === 'discharged' ? '' : classes.strike} ${classes.rightPadded}`}>and hope to be discharged soon.</span>
      </p>
      <p className={status === 'base' ? '' : classes.strike}>I am being sent down to the base.</p>
      <p className={letters.match(/I have received your/) ? '' : classes.strike}>I have received your</p>
      <p className={`${letters.match(/letter/) ? '' : classes.strike} ${classes.padded}`}>letter dated {dated && letters.match(/letter/) ? <span className={classes.dated}>{ dated }</span> : '________'}</p>
      <p className={`${letters.match(/telegram/) ? '' : classes.strike} ${classes.padded}`}>telegram "{dated && letters.match(/telegram/) ? <span className={classes.dated}>{ dated }</span> : '________'}</p>
      <p className={`${letters.match(/parcel/) ? '' : classes.strike} ${classes.padded}`}>parcel "{dated && letters.match(/parcel/) ? <span className={classes.dated}>{ dated }</span> : '________'}</p>
      <p className={next.match(/follows at first|send you a letter/) ? '' : classes.strike}>Letter follows at first opportunity.</p>
      <p className={next.match(/no letter/) ? '' : classes.strike}>I have received no letter from you</p>
      <p className={`${next.match(/lately/) ? '' : classes.strike} ${classes.padded}`}>lately</p>
      <p className={`${next.match(/long time/) ? '' : classes.strike} ${classes.padded}`}>for a long time.</p>   
      <p>Signature only</p>
      {signed ? <p className={classes.signature}>{ signed }</p> : ''}
    </div>
  );

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title={date}
      />
      <Divider />
      <CardContent>
        {
          postcard ? 
            getPostcard(postcard)
          :
            <div>
              { message ? <div className={classes.postcard}>{ message }</div> : ''}
              <div className={`${classes.letterContainer} ${telegram ? classes.telegram : ''}`} dangerouslySetInnerHTML={{ __html: makeLetter(letter) }} />
            </div>
        }
      </CardContent>
    </Card>
  );
};

LatestSales.propTypes = {
  className: PropTypes.string,
  showAddress: PropTypes.bool,
  letter: PropTypes.object
};

export default LatestSales;
