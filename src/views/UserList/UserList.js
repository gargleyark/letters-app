import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import { letters } from '../../data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const lettersWithIds = letters.map((letter, id) => ({ ...letter, id }))
  const [ filteredData, setFilteredData ] = useState(lettersWithIds);

  const filter = str => {
    if (!str) {
      setFilteredData(lettersWithIds)
    }

    setFilteredData(lettersWithIds.filter(({ letter }) => letter && letter.toLowerCase().indexOf(str.toLowerCase()) > -1))
  }

  return (
    <div className={classes.root}>
      <UsersToolbar filter={filter} data={letters} />
      <div className={classes.content}>
        <UsersTable users={filteredData} />
      </div>
    </div>
  );
};

export default UserList;
