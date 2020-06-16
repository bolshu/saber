import React, {
  useContext,
} from 'react';
import { useParams } from "react-router-dom";

import { Typography } from '@material-ui/core';

import { AppContext } from '../../AppProvider';
import { Spinner } from '../Spinner/Spinner';
import { AvailableTasks } from './AvailableTasks';
import { CurrentTasks } from './CurrentTasks';


export const ProjectPage = (): JSX.Element => {
  const { id: projectID } = useParams();
  const { projects, isFetched } = useContext(AppContext);

  const [project] = projects.filter(project => project.id === projectID);

  return (
    isFetched
    ? <div>
        <Typography variant="h3" component="h1" gutterBottom>
          {project.name}
        </Typography>

        <Typography variant="subtitle2" color="textSecondary">
          Project id: {projectID}
        </Typography>

        <AvailableTasks tasks={project.availableTasks} />

        <CurrentTasks tasks={project.currentTasks} />
      </div>
    : <Spinner />
  );
}
