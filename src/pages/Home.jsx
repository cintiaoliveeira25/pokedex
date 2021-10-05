import React from 'react';

import { Header } from "../components/Header";
import { PokemonList } from "../components/PokemonList";

export function Home() {
  return (
    <div>
      <Header/>
      <PokemonList/>
    </div>
  )
}
