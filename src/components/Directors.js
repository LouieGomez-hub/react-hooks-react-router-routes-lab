import React from "react";
import { directors } from "../data";

function Directors() {
  const directors = directors.map((director) => (
    <div key={directors.name}>
      <h2>{directors.name}</h2>
      <ul>
        {directors.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Directors Page</h1>
      {directors}
    </div>
  );
}

export default Directors;
