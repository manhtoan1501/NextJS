import * as React from 'react'
import {
  InputBase,
  IconButton,
  Button,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography,
  Hidden,

} from '@material-ui/core';
import Router from 'next/router';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import EcoIcon from "@material-ui/icons/Eco";
import ViewList from "@material-ui/icons/ViewList";
import Moment from 'react-moment';
import { titles } from '../../constants/index';

const useStyles = makeStyles((theme) => ({
  searchHome: {
    width: '100%',
    minHeight: '500px',
    backgroundColor: 'gray',
    overflow: 'scroll',
  },
}));

const ContentMenu: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} item xs={12} className={classes.searchHome}>
      {titles.map((item, index) => {
        const { elements } = item;
        return elements.map((element, count) => {
          return <Grid item xs={4} style={{ padding: 8 }}>
            <img src={element.image} height={100} width={200} />
            {/* <Typography>{element.children}</Typography> */}
          </Grid>
        })
      })}
    </Grid>
  );
};

export default ContentMenu;
