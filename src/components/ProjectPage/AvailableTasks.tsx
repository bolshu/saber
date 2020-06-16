import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { AvailableTask } from './types';

type Props = {
  tasks: AvailableTask[];
}

export const AvailableTasks = ({ tasks }: Props): JSX.Element => (
  <Box mt={4}>
    <Typography variant="h4">
      Available tasks
    </Typography>
    
    {tasks.map(({id, name }) => (
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
            <Button size="small" startIcon={<PlayArrowIcon />}>Start</Button>
          </CardActions>
        </Card>
      </Box> 
    ))}
  </Box>
);
