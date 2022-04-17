import React from "react";
import { useState } from "react";
import "./Search.css";
import SearchResults from "./SearchResults";

export default function Search() {
  const [values, setValues] = useState([]);
  let timer;

  const debounce = (func) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, 1000);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    if (!value) {
      setValues([]);
      return;
    }

    const url = `https://api.themoviedb.org/3/search/multi?api_key=5914e1c087d0360b477c8b0ceee77bff&language=pt-BR&query=${value}&page=1&include_adult=false`;
    fetch(url)
      .then((response) => response.json())
      .then(({ results }) => {
        setValues(results);
      });
  };

  return (
    <div className="container">
      <div className="search-wrapper">
        <input
          className="search"
          placeholder="Pesquisar"
          onChange={(e) => debounce(() => handleInputChange(e))}
        />
        <SearchResults results={values} />
      </div>
    </div>
  );
}
