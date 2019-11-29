import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';

import Fab from '@material-ui/core/Fab';

import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import SimpleDialogDemo from './DialogPopUp';

const useStyles = makeStyles(theme => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: "#004d40"

    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
        backgroundColor: "#d81b60"
    },
}));

interface BottomAppBarProps { }

export const BottomAppBar: FC<BottomAppBarProps> = () => {
    const classes = useStyles();
    return (<AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
                <MenuIcon />
            </IconButton>
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                <AddIcon onClick={() => alert("Search for Repos")} />
            </Fab>
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                <SimpleDialogDemo />
            </Fab>
            <div className={classes.grow} />
            <IconButton color="inherit">
                <SearchIcon onClick={() => alert("no search")} />

            </IconButton>
            <IconButton edge="end" color="inherit">
                <MoreIcon />
            </IconButton>

        </Toolbar>
    </AppBar>)
}