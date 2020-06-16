import React, {
  useEffect,
  useState,
} from 'react';

import {
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';

import { Skeleton } from './Skeleton';
import { mockApi } from './mockApi';

export type Project = {
  id: string;
  name: string;
};

export const ProjectList = (): JSX.Element => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  useEffect(() => {
    // simulate fetch data from server
    mockApi(setProjects, setIsFetched);
  }, []);

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        List of projects
      </Typography>

      {isFetched
        ? <List>
            {projects.map(({ id, name }) => (
              <ListItem
                key={id}
                component="a"
                href={`/project/${id}`}
                button
              >
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        : <Skeleton />
      }
    </>
  );
}




