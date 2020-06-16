import React from 'react';

import {
  Box,
  CircularProgress,
} from '@material-ui/core';

export const Spinner = (): JSX.Element => (
  <Box pt={10} display="flex" justifyContent="center" alignItems="center">
    <CircularProgress size={100} />
  </Box>
);