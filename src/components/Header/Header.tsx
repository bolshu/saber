import React from 'react'
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: '#fff',
    },
});

export const Header = (): JSX.Element => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/" className={classes.link}>
                    Mass Tasks
                </Link>
            </Toolbar>
        </AppBar>
    );
};
