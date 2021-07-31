import React from 'react';

import { Header } from "../components/Header";
import { PokemonList } from "../components/PokemonList";
// import { NotFound } from "../components/NotFound";
// import { AdvancedSearch } from "../components/AdvancedSearch";

export function Home() {
  return (
    <div>
      <Header/>
      <PokemonList/>
    </div>
  )
}
