import React, {
  useContext,
} from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  LinearProgress,
  Typography,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import RefreshIcon from '@material-ui/icons/Refresh';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import { AppContext } from '../../AppProvider';
import { CurrentTask, Status } from '../../types';

type TaskStatusProps = {
  status: Status;
}

const TaskStatus = ({ status }: TaskStatusProps) => {
  let color: '#3f51b5' | '#4caf50' | '#dc004e';
  let statusText: 'in progress' | 'done' | 'error';
  let icon: JSX.Element;
  
  if (status === 'InProgress') {
    color = '#3f51b5';
    statusText = 'in progress';
    icon = <AutorenewIcon fontSize="small" />;
  } else if (status === 'Done') {
    color = '#4caf50';
    statusText = 'done';
    icon = <CheckCircleOutlineIcon fontSize="small" />;
  } else {
    color = '#dc004e';
    statusText = 'error';
    icon = <ErrorOutlineIcon fontSize="small" />;
  }

  return (
    <Box display="flex" alignItems="center" color={color} mb={1}>
      <Box height={20} mr={.5}>{icon}</Box>
      <Typography variant="button">{statusText}</Typography>
    </Box>
  );
};

type Props = {
  tasks: CurrentTask[];
}

export const CurrentTasks = ({ tasks }: Props): JSX.Element => {
  const {
    retryTask,
    removeTask,
  } = useContext(AppContext);
  const { id: projectId } = useParams();

  return (
    <Box mt={4}>
      <Typography variant="h4">
        Current tasks
      </Typography>
      
      {tasks.length
        ? tasks.map(({id, name, status, progress}) => {
            const handleRetryClick = () => { retryTask(projectId, id) };
            const handleRemoveClick = () => { removeTask(projectId, id) };

            return(
              <Box key={id} mt={2}>
                <Card variant="outlined">
                  <CardContent>
                    <TaskStatus status={status} />

                    <Typography variant="h6" component="h2">
                      {name}
                    </Typography>

                    <Typography variant="caption" color="textSecondary">
                      {id}
                    </Typography>
                  </CardContent>

                  {progress && (
                    <CardContent>
                      <LinearProgress variant="determinate" value={progress} />
                    </CardContent>
                  )}

                  <CardActions>
                      <Button size="small" startIcon={<DeleteIcon />} disabled={status === 'InProgress'} onClick={handleRemoveClick}>Remove</Button>
                      <Button size="small" startIcon={<RefreshIcon />} disabled={status === 'Done' || status === 'InProgress'} onClick={handleRetryClick}>Retry</Button>
                  </CardActions>
                </Card>
              </Box> 
            )}
          )
        : (
            <Box mt={2} textAlign="center">
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="body1" color="textSecondary">
                    No current tasks
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          )}
    </Box>
  );
}