import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Icon,
    Tooltip,
    Button,
    Card,
    Grid,
    CardContent,
    CardActions,
    Typography,
    AppBar,
    Toolbar,
    Hidden,
    Popover,
} from '@material-ui/core';
import _ from 'lodash';


const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 25,
        fontWeight: 600,
        cursor: 'default',
        color: '#1976d2'
    },
}));


const Actions = (props) => {
    const classes = useStyles();
    const { title } = props;
    return (
        <Typography className={classes.title}>
            {title}
        </Typography>
    )
};

export default Actions;
