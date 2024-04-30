import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Book.css';

const URL = 'http://localhost:5000/books';

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const BooksContainer = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  return (
    <div className="books-container">
      <ul className="book-list">
        {books &&
          books.map((book, i) => (
            <li className="book" key={i}>
              <Book book={book}></Book>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BooksContainer;
