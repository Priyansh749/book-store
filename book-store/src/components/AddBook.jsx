import React, { useState } from 'react'
import { TextField, FormLabel, Box, Button, FormControlLabel, Checkbox } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    author: '',
    description: '',
    price: '',
    image: ''
  })

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    // console.log(e.target.name, "Value:", e.target.value);
  }

  const sendRequest = async () => {
    axios.post("http://localhost:5000/books", {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(inputs.available)
    }).then(res => res.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs, checked);
    
    sendRequest().then(()=>history('/books'))  // This will redirect to the books page after the form is submitted
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          maxWidth={700}
          alignContent={"center"}
          alignSelf={"center"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={2}
        >


          <FormLabel>Name</FormLabel>
          <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />

          <FormLabel>Author</FormLabel>
          <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author" />

          <FormLabel>Description</FormLabel>
          <TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description" />

          <FormLabel>Price</FormLabel>
          <TextField value={inputs.price} onChange={handleChange} type='number' margin="normal" fullWidth variant="outlined" name="price" />

          <FormLabel>Image</FormLabel>
          <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" />

          <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />

          <Button value={inputs.available} variant='contained' type="submit" >Add book</Button>
        </Box>
      </form>
    </>
  )
}

export default AddBook