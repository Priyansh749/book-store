import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <>

      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography fontFamily="fantasy" variant='h2' > This is a CRUD application </Typography>
        <Typography variant='h3'> By MERN stack </Typography>
      </Box>

    </>
  );
};

export default About;
