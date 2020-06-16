import React, {
  useContext,
} from 'react';
import { Link } from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AppContext } from '../../AppProvider';
import { Spinner } from '../Spinner/Spinner';

const useStyles = makeStyles({
  link: {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    padding: '10px 16px',
    lineHeight: '24px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: '.3s',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    }
  },
});


export const ProjectList = (): JSX.Element => {
  const classes = useStyles();

  const {
    projects,
    isFetched,
  } = useContext(AppContext);

  return (
    isFetched
      ? <>
          <Typography variant="h3" component="h1" gutterBottom>
            List of projects
          </Typography>

          {projects.map(({ id, name }) => (
            <Link key={id} to={`/project/${id}`} className={classes.link}>
              {name}
            </Link>
          ))}
        </>
      : <Spinner />
  );
};
