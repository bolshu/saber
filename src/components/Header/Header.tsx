import React from 'react'
import { Link, useLocation } from 'react-router-dom';

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
    const location = useLocation();

    return (
        <AppBar position="static">
            <Toolbar>
                {location.pathname !== '/' && (
                    <Link to="/" className={classes.link}>
                        Back to projects list
                    </Link>
                )}
            </Toolbar>
        </AppBar>
    );
};
