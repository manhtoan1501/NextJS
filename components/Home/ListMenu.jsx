import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import {
    List,
    Divider,
    ListItemIcon,
    ListItem,
    ListItemText,
    Collapse,
    Button,
    ListSubheader,
    Popover,
    Typography,
    MenuItem,
    Tooltip,
    Grid,


} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import GamepadIcon from '@material-ui/icons/Gamepad';
import { listMenu } from '../../constants/index';

const useStyles = makeStyles((theme) => ({
    listItem: {
        backgroundColor: '#e3f2fd',
        "&:hover": {
            // backgroundColor: '#90caf9',
        }
    },
    textItem: {
        color: '#1976d2',
        fontSize: 14,
        paddingRight: 20,
    },
    arrow: {
        color: 'orange',
    },
    tooltip: {
        backgroundColor: 'orange',
        color: '#1976d2',
        cursor: 'pointer'
    },
}));

const NestedList = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={0} style={{ padding: '0 80px' }}>
                <Grid item xs={3}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        // className={classes.root}
                        style={{ padding: 0 }}
                    >
                        {listMenu.map((item, index) => {
                            const { rooms } = item
                            return (
                                <div key={index}>
                                    <ListItem
                                        className={classes.listItem}
                                        button
                                        style={{
                                            backgroundColor: '#e3f2fd',
                                            height: 35,
                                            padding: '0 4px',
                                            pointerEvents: 'auto'
                                        }}
                                    >
                                        <GamepadIcon style={{ fontSize: 25, color: '#1976d2', padding: 4 }} />
                                        <Typography className={classes.textItem}>
                                            {item.title}
                                        </Typography>
                                    </ListItem>
                                    <Divider />
                                </div>
                            );
                        })}
                    </List >
                </Grid>
                <Grid item xs={9}>
                </Grid>
            </Grid>
        </div>
    );
}

export default NestedList;
