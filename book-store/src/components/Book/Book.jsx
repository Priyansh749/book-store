import React from 'react'
import './Book.css'
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Book = (props) => {
    const history = useNavigate()
    const { _id, name, author, description, price, available, image } = props.book;
    const deleteHandler = async () => {
        await axios.delete(`http://localhost:5000/books/${_id}`)
            .then(res => res.data)
            .then(() => history("/"))
            .then(() => history("/books"))
    }

    return (
        <div className='card1'>
            <img src={image} alt={name} />
            <article> By {author} </article>
            <h4 className='book-name'> {name} </h4>
            <p> {description} </p>
            <h2> Rs {price} </h2>
            <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>Update</Button>
            <Button onClick={deleteHandler} sx={{ mt: "auto" }}>Delete</Button>
        </div>
    )
}

export default Book