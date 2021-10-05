import React, { useEffect } from "react";
import { usePokemon } from "../../contexts/usePokemon";

import "./styles.scss";

export function PokemonInfos() {
  const { idSelected, setIdSelected} = usePokemon();

  const pokemonImages =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

  useEffect(() => {
    const link = document.location.href;
    const id = link.split("/")[4]
    setIdSelected(id);
  }, []);

  return (
    <div>
      <img src={`${pokemonImages}/${idSelected}.png`} alt="" />
    </div>
  );
}
