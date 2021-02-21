import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#1976d2'
  },
}));

const Actions = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
    </div>
  )
};

export default Actions;
