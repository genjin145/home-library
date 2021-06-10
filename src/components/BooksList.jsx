import React from 'react';
import Book from './Book';
import Empty from './Empty';

function BooksList({ books, onClickBook }) {
  if (!books.length) {
    return <Empty />;
  }

  return (
    <div className="books-list">
      {books.map((book) => (
        <Book key={book.id} onClickBook={onClickBook} {...book} />
      ))}
    </div>
  );
}

export default BooksList;
