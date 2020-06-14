import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

export const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="subtitle1" color="inherit" component="a" href="/">
                Mass Tasks
            </Typography>
        </Toolbar>
    </AppBar>
);
