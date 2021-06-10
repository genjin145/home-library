import React from 'react';
import IconImage from '../assets/svg/image.svg';

function Book({ id, image, title, author, onClickBook }) {
  function handleClick() {
    onClickBook({ id, image, title, author });
  }

  return (
    <article className="book" onClick={handleClick}>
      <header className="book__header">
        <img
          className="book__image"
          src={image || IconImage}
          alt={title}
          width={image ? 145 : 40}
          height={image ? 205 : 40}
        />
      </header>

      <h3 className="book__title">{title}</h3>
      <p className="book__author">{author || 'без автора'}</p>
    </article>
  );
}

export default Book;
