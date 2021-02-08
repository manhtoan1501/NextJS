import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { I18n } from 'react-redux-i18n';
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
import GamepadIcon from '@material-ui/icons/Gamepad';
import moment from 'moment';
import { products } from '../../constants/index';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
    product: {
        // border: '1px solid white',
        borderRadius: 2,
        '&:hover': {
            boxShadow: '2px 2px 8px 2px #aaa',
        },
    },
}));


const Actions = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={0}>
                {products.map((item, index) => {
                    return (
                        <Grid itrem xs={3} style={{ padding: 10 }} key={index}>
                            <div className={classes.product}>
                                <img src={item.image} style={{ height: 200, width: '100%' }} />
                                <div style={{ padding: '4px 8px' }}>
                                    <div style={{ height: 50, width: "100%" }} >
                                        <GamepadIcon style={{ fontSize: 15, color: '#1976d2' }} />
                                        <Typography style={{ display: 'inline', padding: 4, color: '#aaa' }}>
                                            {item.title}
                                        </Typography>
                                    </div>
                                    <React.Fragment>
                                        <Typography style={{ display: 'inline-block', fontWeight: 500 }}>
                                            {item.moneyNew.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} {' đ '}
                                        </Typography>
                                        <Typography variant='subtitle2' style={{ display: 'inline-block', color: '#aaa', textDecoration: 'line-through', padding: 4 }}>
                                            {` ${item.moneyOld}`}
                                        </Typography>
                                    </React.Fragment>
                                </div>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        </div >
    )
};

export default Actions;
