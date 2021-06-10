import React from 'react';
import IconImage from '../assets/svg/image.svg';
import { toBase64 } from '../helpers';

function ImageLoader({ image, getImage }) {
  function handleChange(evt) {
    const file = evt.target.files[0];

    toBase64(file).then((data) => getImage(data));
  }

  const infoMessage = (
    <span className="image-loader__info">
      Нажми на значок чтобы добавить картинку
    </span>
  );

  return (
    <label className="image-loader">
      <img className="image-loader__image" src={image || IconImage} alt="" />

      {image ? null : infoMessage}

      <input
        className="image-loader__input"
        type="file"
        accept=".jpg, .jpeg, .png, .svg"
        name="image"
        id="image"
        onChange={handleChange}
      />
    </label>
  );
}

export default ImageLoader;
