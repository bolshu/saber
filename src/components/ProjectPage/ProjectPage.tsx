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
import { Project } from './types';

export const ProjectPage = (): JSX.Element => {
  const [project, setProject] = useState<Project | null>(null);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  useEffect(() => {
    // simulate fetch data from server
    mockApi(setProject, setIsFetched);
  }, []);

  return (
    <div>
        {isFetched
          ? <>
          <Typography variant="h2" component="h1" gutterBottom>
            {project.id}
          </Typography>

          <Typography variant="subtitle2">
            {project.id}
          </Typography>
          <br/>
          list of availableTasks
    
          <List>
            <ListItem
              key={id}
              href={`/project/${id}`}
              button
            >
              <ListItemText primary={id} />
            </ListItem>
          </List>

          <br/>

          list of runningTasks

          <List>
            <ListItem
              key={id}
              href={`/project/${id}`}
              button
            >
              <ListItemText primary={id} />
            </ListItem>
          </List>
        </>
          : <Skeleton />
        }
    </div>
  );
}
