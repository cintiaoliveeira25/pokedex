import React from 'react';

import "./styles.scss";

export function NotFound() {
  return (
    <div className="alert">
      <span>No Pokémon Matched Your Search!</span>
      <p>
        Try these suggestions to find a Pokémon:
      </p>
      <ul>
        <li>Reduce the number of search parameters;</li>
        <li>Search for only one Pokémon type at a time;</li>
        <li>Try multiple body sizes and shapes.</li>
      </ul>
    </div>
  )
}
