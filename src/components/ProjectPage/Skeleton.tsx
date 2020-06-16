import React from 'react';

import {
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Skeleton as MaterialSkeleton } from '@material-ui/lab';

export const Skeleton = (): JSX.Element => {
  const mock = new Array(5).fill('');

  return (
    <List>
      {mock.map((item, index) => (
        <ListItem key={index}>
          <ListItemText>
            <MaterialSkeleton variant="text" animation="wave" width={300} />
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
