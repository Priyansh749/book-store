import Header from './components/Header'
import './App.css'
import Home from './components/Home';
import AddBook from './components/AddBook';
import BooksContainer from './components/Book/BooksContainer'
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.css';
import BookDetail from './components/Book/BookDetail';


function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={< Home />} exact />
          <Route path="/add" element={< AddBook />} exact />
          <Route path="/books" element={<BooksContainer />} exact />
          <Route path="/about" element={< About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;