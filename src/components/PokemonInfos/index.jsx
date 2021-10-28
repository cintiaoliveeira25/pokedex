import { useState, useEffect } from "react";
import { usePokemon } from "../../contexts/usePokemon";
import { Container } from "@material-ui/core";

import "./styles.scss";

export function PokemonInfos() {
  const { idSelected, setIdSelected, pokemon, setPokemon } = usePokemon();
  const [isLoading, setIsLoading] = useState(true);
  const [poke, setPoke] = useState(false);

  const pokemonImages =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

  async function getPokemon(namePoke) {
    const link = document.location.href;
    const id = link.split("/")[4];
    setIdSelected(id);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setPokemon(data);

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const dataSpecies = await resp.json();
    const pokeDescription = await dataSpecies.flavor_text_entries
      .filter((text) => text.language.name === "en")[0]
      .flavor_text.replaceAll("\f", " ")
      .replaceAll("POKéMON", "Pokémon");

    setPoke({ ...dataSpecies, flavor_text_entries: pokeDescription });
    setIsLoading(false);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Container>
      <div className="poke-info">
        {isLoading ? (
          "loading..."
        ) : (
          <>
            <div className="title">
              <span className="poke-name">{pokemon.forms[0].name}</span>
              <span className="poke-id">
                {idSelected < 10 && `#00${idSelected}`}
                {idSelected > 10 && idSelected < 99 && `#0${idSelected}`}
                {idSelected > 99 && `#${idSelected}`}
              </span>
            </div>

            <div className="row">
              <div className="picture">
                <img
                  src={`${pokemonImages}/${idSelected}.png`}
                  alt="pokemon"
                  className="background-image"
                />
              </div>
              <div className="information">
                <p>{poke.flavor_text_entries}</p>
                <div className="types">
                  {pokemon.types.map((tipo) => (
                    <div className={`element type-${tipo.type.name}`}>
                      {tipo.type.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
