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
  Typography,
} from '@material-ui/core';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { AvailableTask } from '../../types';
import { AppContext } from '../../AppProvider';

type Props = {
  tasks: AvailableTask[];
}

export const AvailableTasks = ({ tasks }: Props): JSX.Element => {
  const { runTask } = useContext(AppContext);
  const { id: projectID } = useParams();

  return (
    <Box mt={4}>
      <Typography variant="h4">
        Available tasks
      </Typography>
      
      {tasks.map(({id, name }) => {
        const handleClick = () => {
          runTask(projectID, name,);
        };

        return (
          <Box key={id} mt={2}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h2">
                  {name}
                </Typography>
    
                <Typography variant="caption" color="textSecondary">
                  {id}
                </Typography>
              </CardContent>
    
              <CardActions>
                <Button size="small" startIcon={<PlayArrowIcon />} onClick={handleClick}>Start</Button>
              </CardActions>
            </Card>
          </Box> 
        );
      })}
    </Box>
  );
};
