import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ImageLoader from './ImageLoader';

function BookUpdate({
  id,
  image = null,
  title = '',
  author = '',
  addBook,
  editBook,
  removeBook,
}) {
  const [newImage, setNewImage] = useState(image);
  const [newTitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(author);

  function handleSubmit(evt) {
    evt.preventDefault();

    const newBook = {
      id,
      image: newImage,
      title: newTitle,
      author: newAuthor,
    };

    if (id) {
      editBook(newBook);
    } else {
      addBook({
        ...newBook,
        id: nanoid(),
      });
    }

    setNewTitle('');
  }

  let removeButton;
  if (id) {
    removeButton = (
      <button
        className="button-secondary"
        type="button"
        onClick={() => removeBook(id)}
      >
        Удалить
      </button>
    );
  }

  return (
    <form className="book-add form" onSubmit={handleSubmit}>
      <ImageLoader image={newImage} getImage={setNewImage} />

      <div className="form__field">
        <label className="label" htmlFor="title">
          Название
        </label>
        <input
          className="input"
          type="text"
          name="title"
          id="title"
          required
          value={newTitle}
          onChange={(evt) => setNewTitle(evt.target.value)}
        />
      </div>

      <div className="form__field">
        <label className="label" htmlFor="author">
          Автор
        </label>
        <input
          className="input"
          type="text"
          name="author"
          id="author"
          value={newAuthor}
          onChange={(evt) => setNewAuthor(evt.target.value)}
        />
      </div>

      <div className="book-add__buttons">
        <button className="form__submit button-primary">Готово</button>
        {removeButton}
      </div>
    </form>
  );
}

export default BookUpdate;
