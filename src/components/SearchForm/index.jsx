import { useState } from 'react';

import './assets/index.css';

export const SearchForm = ({ defaultValue, onSubmit }) => {
  const [value, setValue] = useState(defaultValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { search } = event.target.elements;

    onSubmit(search.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="search"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />

      <button type="submit" className="search-form-button">Search</button>
    </form>
  );
};
