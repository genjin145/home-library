import React, { useState, useEffect } from 'react';
import Drawer from './components/Drawer';
import BookAdd from './components/BookUpdate';
import BooksList from './components/BooksList';

function App() {
  const [books, setBooks] = useState([]);
  const [added, setAdded] = useState(false);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    const localBooks = window.localStorage.getItem('books');

    if (localBooks) {
      setBooks(JSON.parse(localBooks));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  function addBook(book) {
    setBooks((prevBooks) => prevBooks.concat(book));
    setAdded(false);
  }

  function editBook(book) {
    setBooks((prevBooks) =>
      prevBooks.map((b) => {
        if (b.id === book.id) {
          return { ...book };
        }

        return b;
      })
    );
    setAdded(false);
  }

  function removeBook(id) {
    const verification = window.confirm('Точно при точно удаляем ?');

    if (!verification) return;

    setBooks((prevBooks) => prevBooks.filter((b) => b.id !== id));
    setAdded(false);
  }

  function handleAddBookButton() {
    setCurrentBook({});
    setAdded(true);
  }

  function handleBook(book) {
    setCurrentBook(book);
    setAdded(true);
  }

  return (
    <>
      <header className="header">
        <div className="header__inner container">
          <button
            className="header__button-add button-primary"
            onClick={handleAddBookButton}
          >
            Добавить книгу
          </button>
        </div>
      </header>

      <main className="container">
        <h1 className="page-title">Домашняя библиотека</h1>

        <BooksList books={books} onClickBook={handleBook} />
      </main>

      <Drawer isOpen={added} close={() => setAdded(false)}>
        <BookAdd
          {...currentBook}
          addBook={addBook}
          editBook={editBook}
          removeBook={removeBook}
        />
      </Drawer>
    </>
  );
}

export default App;
