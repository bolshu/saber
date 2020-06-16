import React, {
  useEffect,
  useState,
} from 'react';

import { Typography } from '@material-ui/core';

import { mockProject } from './mockApi';

import { Skeleton } from './Skeleton';
import { AvailableTasks } from './AvailableTasks';
import { CurrentTasks } from './CurrentTasks';

import { Project } from './types';

export const ProjectPage = (): JSX.Element => {
  const [project, setProject] = useState<Project | null>(null);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  useEffect(() => {
    // simulate fetch data from server
    mockProject(setProject, setIsFetched);
  }, []);

  return (
    <div>
        {isFetched && project
          ? <>
              <Typography variant="h3" component="h1" gutterBottom>
                {project.name}
              </Typography>

              <Typography variant="subtitle2" color="textSecondary">
                Project id: {project.id}
              </Typography>

              <AvailableTasks tasks={project.availableTasks} />

              <CurrentTasks tasks={project.currentTasks} />
          </>
          : <Skeleton />
        }
    </div>
  );
}
