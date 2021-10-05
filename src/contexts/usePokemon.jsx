import React, { useState, createContext, useContext } from "react";

const dataContext = createContext();

export function Context({ children }) {
  const [pokemon, setPokemon] = useState(false);
  const [pokemonSearch, setPokemonSearch] = useState(false);
  const [idSelected, setIdSelected] = useState(false);

  return (
    <dataContext.Provider
      value={{
        pokemon,
        setPokemon,
        pokemonSearch,
        setPokemonSearch,
        idSelected,
        setIdSelected,
      }}
    >
      {children}
    </dataContext.Provider>
  );
}

export function usePokemon() {
  const contextUser = useContext(dataContext);
  if (!contextUser)
    throw new Error("usePokemon must be used within a Context provider");
  const {
    pokemon,
    setPokemon,
    pokemonSearch,
    setPokemonSearch,
    idSelected,
    setIdSelected,
  } = contextUser;
  return {
    pokemon,
    setPokemon,
    pokemonSearch,
    setPokemonSearch,
    idSelected,
    setIdSelected,
  };
}
