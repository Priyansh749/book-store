import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import bookLogo from '../assets/bookLogo.jpg';

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      marginTop={5}
      bgcolor="#f7f7f7"
      padding={5}
    >
      <Box marginRight={4}>
        <Typography variant='h1' fontFamily="Quicksand, sans-serif" marginBottom={4} fontWeight={700}>
          Welcome to Our Bookstore
        </Typography>
        <Typography variant='h5' fontFamily="Roboto, sans-serif" marginBottom={6}>
          Explore our collection of books, find your next great read.
        </Typography>
        <Button
          component={Link}
          to="/books"
          variant='contained'
          size="large"
          sx={{ backgroundColor: '#FF5722', color: 'white', '&:hover': { backgroundColor: '#E64A19' } }}
        >
          View all products
        </Button>
      </Box>

      <img src={bookLogo} alt="Book Illustration" style={{ width: '30%',borderRadius:'50%' , maxWidth: '400px' }} />
    </Box>
  );
}

export default Home;
